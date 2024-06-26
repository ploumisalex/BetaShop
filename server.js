if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const initialize_passport = require('./passport-config')
const dburi = require('./config');
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const { resolveInclude } = require('ejs')

const main_categories=["hobby","technology","fashion"]
const sub_categories=["sports","men_fashion","women_fashion","televisions","mobile_phones","fitness","pc_hardware","jewellery","laptops"]

//connect to mongodb
const mongoose = require('mongoose')

mongoose.connect(dburi,{useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>{
    app.listen(process.env.PORT || 4000)
}).catch((err)=>{
    console.log(err)
})
const Customer = require("./models/customers")
const Message = require("./models/messages.js")
const Review = require("./models/reviews.js")
const Product = require("./models/products.js")
const { query } = require('express')

//initialize passport for login auth
initialize_passport(
    passport,
    email => findUser(email),
    id => findUserId(id)
)

app.set('view-engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/imgs', express.static(__dirname + 'public/imgs'))
app.use('/js', express.static(__dirname +'public/js'))

app.get('/', (req,res)=>{
    if (req.isAuthenticated()){
        res.render('index.ejs', {name : req.user.username, main_cat_table: main_categories})
    }else{
        //req.session.cart = [];
        res.render('index.ejs', {name : null, main_cat_table: main_categories})
    }
})

app.get('/login', checkNotAuthenticated , (req,res)=>{
    res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated , passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated , (req,res)=>{
    res.render('register.ejs')
})

app.get('/storage', async (req,res)=>{
    let requsername = null;
    if(req.isAuthenticated()){
        requsername = req.user.username
    }
    if(main_categories.includes(req.query.category)){
        let temp = await getSubCategoriesFromCategory(req.query.category)
        res.render('storage.ejs', {category:req.query.category ,sub_table: temp,product_table: null, name : requsername})
    }else if(sub_categories.includes(req.query.category)){
        let temp = await getSubCategoryProducts(req.query.category)
        res.render('storage.ejs', {category:req.query.category ,sub_table: null,product_table: temp, name : requsername})
    }else{
        res.redirect('/')
    }
})

app.post('/storage',async (req,res)=>{
    console.log("Never")
})

app.get('/search',async (req,res)=>{
    let requsername = null;
    if(req.isAuthenticated()){
        requsername = req.user.username
    }
    Product.find({"title" : {$regex : req.query.t , $options: 'i' }}).then((result) =>{
        res.render('storage.ejs', {category: "search" ,sub_table: null,product_table: result, name : requsername})
    }).catch((err) =>{
        console.log(err)
    })
})

app.get('/product', async (req,res)=>{
    var temp = await getReviewsByPId(req.query.pid)
    for (let i = 0; i < temp.length; i++) {
        temp[i].customer_id = await getUsernameById(temp[i].customer_id)
    }
    var prod = await findProductById(req.query.pid)
    var relatedp = await Product.aggregate([{ $match: { sub_category: prod[0].sub_category }},{ $sample: { size: 3 }}])
    if (req.isAuthenticated()){
        res.render('product.ejs', {product: prod[0] , name : req.user.username, reviews : temp, related: relatedp})
    }else{
        res.render('product.ejs', {product: prod[0] , name : null , reviews: temp, related: relatedp})
    }
})

app.post('/product',async (req,res)=>{
    if (req.isAuthenticated()){
        if(typeof(req.query.review) !== 'undefined' && req.query.review == 'true'){
            let review = new Review({
                customer_id : req.user.id,
                product_id : req.body.pid,
                review : req.body.text,
                stars : req.body.rv
            })
            review.save().then(()=>{
                res.redirect('/product?pid='+req.body.pid)
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            Customer.updateOne({'_id' : req.user.id},
            {$push: {'cart': {prod_id:req.query.pid,count: 1}}}).then(()=>{
                res.redirect('/product?pid='+req.query.pid)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }else{
        if(typeof(req.query.review) !== 'undefined'){
            res.redirect('/login')
        }else{
            res.redirect('/product?pid='+req.query.pid)
        }
    }
})
app.post('/register', checkNotAuthenticated , async (req,res)=>{
    try{
        const hashed_password = await bcrypt.hash(req.body.password, 10);
        let customer = new Customer({
            username : req.body.name,
            email : req.body.email,
            password : hashed_password,
            cart : [],
            icon : "https://www.vhv.rs/dpng/d/479-4793444_gasp-twitch-emote-twitch-blue-face-emote-hd.png"
        });
        customer.save().then(()=>{
            res.redirect('/login');
        }).catch((err)=>{
            console.log(err);
        });
    }
    catch{
        res.redirect('/register')
    }
})

app.delete('/logout', (req,res) => {
    req.logOut()
    res.redirect('/')
})

app.get('/cart',async (req,res) => {
    if (req.isAuthenticated()){
        if(typeof(req.query.rp) !== 'undefined'){
            Customer.updateOne({'_id': req.user.id},{$pull:{cart: { prod_id: req.query.rp}}}).then(()=>{
                findUserId(req.user.id).then(async (result)=>{
                    var custom_cart = result.cart;
                    for (let i = 0; i < result.cart.length; i++) {
                        custom_cart[i].product = await findProductById(result.cart[i].prod_id);
                    }
                    res.render('cart.ejs', {name : req.user.username,cart: custom_cart})
                }).catch(err=>{
                    console.log(err)
                })}).catch((err)=>{
                    console.log(err)
                })
        }else{
            findUserId(req.user.id).then(async (result)=>{
                var custom_cart = result.cart;
                for (let i = 0; i < result.cart.length; i++) {
                    custom_cart[i].product = await findProductById(result.cart[i].prod_id);
                }
                res.render('cart.ejs', {name : req.user.username,cart: custom_cart})
            }).catch(err=>{
                console.log(err)
            })
        }
       
    }else{
        res.redirect('/login')
    }
})

app.post('/cart',(req,res)=>{
    res.redirect('/');
})

app.get('/contact',async (req,res) => {
    if (req.isAuthenticated()){
        res.render('contact.ejs', {name : req.user.username,message : 0})
    }else{
        res.render('contact.ejs' , {name : null,message : 0})
    }

})

app.post('/contact',async (req,res)=>{
    let message = new Message({
        email : req.body.email,
        theme: req.body.theme,
        message : req.body.message
    });
    message.save().then(()=>{
        res.redirect('/login');
    }).catch((err)=>{
        console.log(err);
    });
})

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    else{
        res.redirect('/login')
    }

}

function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()

}

async function findUser(email){
    return new Promise((resolve, reject) => {
        const query = Customer.findOne({'email': email});
        query.select('id username email password cart');
        query.exec((err,result)=>{
            if(err) {
                reject(err);
            }
            resolve(result);           
        })
    })
}

async function getReviewsByPId(pid){
    return new Promise((resolve,reject)=>{
        const query = Review.find({ 'product_id': pid},{_id: 0,customer_id: 1, review: 1,stars :1 })
        query.exec((err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

async function findUserId(id){
    return new Promise((resolve, reject) => {
        const query = Customer.findById(id);
        query.select('id username email password cart');
        query.exec((err,result)=>{
            if(err) {
                reject(err);
            }
            resolve(result);
        })
    })
}

async function findProductById(id){
    return new Promise((resolve, reject) => {
        const query = Product.find({ '_id': id},{})
        query.exec((err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

async function getUsernameById(id){
    return new Promise((resolve,reject)=>{
        const query = Customer.find({ '_id': id},{_id: 0,username: 1 })
        query.exec((err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result[0].username)
        })
    })
}

async function getSubCategoryProducts(cat){
    return new Promise((resolve,reject)=>{
        const query = Product.find({ 'sub_category': cat},{})
        query.exec((err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

async function getSubCategoriesFromCategory(cat){
    return new Promise((resolve,reject)=>{
        const query = Product.distinct('sub_category',{'category': cat})
        query.exec((err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

async function getManufacturerList(cat){
    return new Promise((resolve,reject)=>{
        const query = Product.distinct('manufacturer',{'sub_category': cat})
        query.exec((err,result)=>{
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}







/*Product.aggregate([
    { $match: {'sub_category': 'laptops' } },
    { $sort: {'rating.count' : 1}}
    ]).then((resu)=>{
        console.log(resu)
    }).catch((err)=>{console.log(err)})*/
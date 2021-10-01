if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const initialize_passport = require('./passport-config')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const { resolveInclude } = require('ejs')
const port = process.env.PORT || 4000

//connect to mongodb
const mongoose = require('mongoose')
const dburi = "mongodb+srv://fakelos:adminofakelos@customersdb.gjnea.mongodb.net/customers_table?retryWrites=true&w=majority"
mongoose.connect(dburi,{useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>{
    app.listen(port)
}).catch((err)=>{
    console.log(err)
})
const Customer = require("./models/customers")
const Message = require("./models/messages.js")

//initialize passport for login auth
initialize_passport(
    passport,
    email => findUser(email),
    id => findUserId(id)
)

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

app.set('view-engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
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
        res.render('index.ejs', {name : req.user.username})
    }else{
        //req.session.cart = [];
        res.render('index.ejs', {name : null})
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

app.get('/storage', (req,res)=>{
    if (req.isAuthenticated()){
        res.render('storage.ejs', {category:req.query.category , name : req.user.username})
    }else{
        res.render('storage.ejs', {category:req.query.category , name : null})
    }
})

app.get('/product', (req,res)=>{
    if (req.isAuthenticated()){
        res.render('product.ejs', {product_id:req.query.product_id , name : req.user.username})
    }else{
        res.render('product.ejs', {product_id:req.query.product_id , name : null})
    }
})

app.post('/product',(req,res)=>{
    if (req.isAuthenticated()){
        Customer.updateOne({'_id' : req.user.id},
            {$push: {'cart': {prod_id:req.query.product_id,count:req.body.ammount}}}).then(()=>{
                res.render('product.ejs', {product_id:req.query.product_id , name : req.user.username})
            }).catch((err)=>{
                console.log(err)
            })
    }else{
        res.render('product.ejs', {product_id:req.query.product_id , name : null})
    }
})
app.post('/register', checkNotAuthenticated , async (req,res)=>{
    try{
        const hashed_password = await bcrypt.hash(req.body.password, 10);
        let customer = new Customer({
            username : req.body.name,
            email : req.body.email,
            password : hashed_password,
            cart : []
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
        if(typeof(req.query.remove_prod) !== 'undefined'){
            Customer.updateOne({'_id': req.user.id},{$pull:{cart: { prod_id: req.query.remove_prod}}}).then(()=>{
                findUserId(req.user.id).then((result)=>{
                    res.render('cart.ejs', {name : req.user.username,cart: result.cart})
                }).catch(err=>{
                    console.log(err)
                })}).catch((err)=>{
                    console.log(err)
                })
        }else{
            findUserId(req.user.id).then((result)=>{
                res.render('cart.ejs', {name : req.user.username,cart: result.cart})
            }).catch(err=>{
                console.log(err)
            })
        }
       
    }else{
        res.redirect('/login')
    }

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

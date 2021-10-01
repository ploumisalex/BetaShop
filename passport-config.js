const local_strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport,getUserByEmail,getUserById){
    const authenticate_user = async (email,password,done) =>{
        let user = await getUserByEmail(email);
        if(user==null){
            return done(null,false,{message: 'No user with that email.'});
        }
        try{
            if(await bcrypt.compare(password,user.password)){
                return done(null,user);
            }else{
                return done(null,false,{message: 'Password incorrect.'});
            }
        }
        catch(e){
            return done(e);
        }

    }
    passport.use(new local_strategy({usernameField: 'email'}, authenticate_user));
    passport.serializeUser((user,done)=>  done(null,user.id));
    passport.deserializeUser(async (id,done)=> {
        return done(null,await getUserById(id));
    });
}

module.exports = initialize
const router = require('express').Router();
const passport = require('passport');
router.get('/',(req,res)=>{
   res.send("<h1>Auth_routes page</h1>");
});
router.get('/login',(req,res)=>{
    console.log("login");
    res.render('login');
});

router.get("/logout",(req,res)=>{
    //handle with passport
   res.send("logging out");
});
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'), (req,res)=>{
    res.send("You reached the callback");
});

module.exports = router;
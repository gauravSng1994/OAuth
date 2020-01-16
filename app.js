const express = require('express');
const authRoutes = require('./routes/auth_routes');
const userRoutes = require('./routes/userRoutes');
const passportSetUp = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const PORT = process.env.port || 3001;
mongoose.connect(keys.mongodb.dbURI,{useNewUrlParser: true}, ()=>{
   console.log('connected to mongodb...');
});
const app = express();

//Routes
app.use('/auth',authRoutes);
app.use('/api',userRoutes);
//setting view engine
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
   res.render('home');
});
app.listen(PORT,()=>{
    console.log("Listening to port 3001...")
});
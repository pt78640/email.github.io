const connect=require('./config/db');
const express = require('express');
const adminsController=require('./controllers/admins.controller')

const app = express();
app.use(express.json()); 


const usersController = require('./controllers/users.controller');
app.use("/users",usersController);

app.use("/admins",adminsController);


const start=async ()=>{
    await connect(); 
    app.listen(1111, ()=>{
        console.log('Listening on port 1111'); 
    }); 
};
module.exports =start;
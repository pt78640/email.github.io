const User = require("../models/users.models");

const express = require("express");
const sendMail = require("../util/send.mail");
const router = express.Router();

//user Crud
router.post("/", async (req, res) => {

    try {
        const newUser = await User.create(req.body);
       
        sendMail(
         "priyanshi@sender.com",
         `${req.body.email}`,
         `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
         `Hi ${req.body.first_name} ,please confirm your email address`,
         "<h1> Created a User</h1>",
     );
          
        return res.status(201).send({ newUser });
    }
    catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });

    }

});

router.get("/", async (req, res) => {
    try {
        const page=+req.query.page || 1;
        const size=req.query.size || 10; 
        const offset=(page-1)*size; 
        const newUser = await User.find({}).skip(offset).limit(size)
        .lean().exec();

            const totalPage= Math.ceil((await User.find().countDocuments())/size);
        return res.status(201).send({ newUser, totalPage });

    }
    catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }

});


module.exports = router;
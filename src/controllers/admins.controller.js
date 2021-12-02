const Admin=require("../models/admins.models");
const User = require("../models/users.models");

const express = require("express");
const router=express.Router();
const sendMail = require("../util/send.mail");

//user Crud

router.post("", async (req, res) => {
    
try {
        const newAdmin = await Admin.create(req.body);
        const arr=[
            "priya@masai.com",
            "ritu@masai.com",
            "dhavel@masai.com",
            "ankush@masai.com",
            "aman@masai.com",
        ];
        sendMail(
            "priyanshi@sender.com",
            arr,
            `${req.body.first_name} ${req.body.last_name} has registerd with us`,
            `Please Welcome ${req.body.first_name}`,
            "<h1> Created a admin</h1>",
        );
        return res.status(201).send({ newAdmin });
       
    }
    catch (e) {
        res.status(500).json({ message: e.message, status:"Failed" });

    }
   

});

module.exports =router; 
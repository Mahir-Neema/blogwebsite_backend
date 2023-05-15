const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// registration
router.post("/register", async(req,res)=>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(e){
        res.status(500).json(e);
    }
});

module.exports = router
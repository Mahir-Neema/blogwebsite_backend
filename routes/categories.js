const router = require("express").Router();
const Category = require("../models/Category");
const Categories = require("../models/Category");

router.post("/", async (req,res)=>{
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }catch(e){
        res.status(500).json(e);
    }
});

module.exports = router;
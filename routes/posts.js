const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");


//creating a new post
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(e){
        res.status(500).json(e);
    }
});

//updating a post
router.delete("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has been deleted");
            } catch(e){
                res.status(500).json(e);
            }
        }catch(e){
            res.status(404).json("User not found");
        }
    }
    else{
        res.status(401).json("You can delete only your account");
    }
});


//deleting a post

// get post
router.get("/:id", async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(e){
        res.status(500).json(e);
    }
});



module.exports = router;
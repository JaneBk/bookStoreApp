import express from "express";
import User from "../model/user.model.js"; 
import { signup, login } from "../controller/user.controller.js";
const router=express.Router();

//add book to favourite
router.put("add-book-to-favourite",signup,login, async (req,res) =>{
    try {
        const {bookId, id}=req.headers;
        const user = await User.findById(id);
        const isBookFav=userData.favourites.includes(bookId);
        if(isBookFav)
            return res.status(200).json({message:"Book is already in favourites"});
        await User.findByIdAndUpdate(id, {$push: { favourites: bookId}});
        return res.status(200).json({message:"Book added to favourites"});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
})

export default router;

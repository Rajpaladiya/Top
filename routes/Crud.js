const {connect} = require("mongoose")
const MongoToConnect = require("../db")
MongoToConnect();
const express = require('express')
const router =express.Router();
const User = require('../models/CRUD')
//Route-1: GET DATA

router.get('/createUser',async (req,res)=>{

    try{
    const { name, email } = req.body;
    const user = new User({name,email})
    const saveUser = await user.save()
    console.log("SaveNote:::",saveUser)
    res.json(saveUser)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
    
})






router.delete(`/deleteUser`,async(req,res)=>{
    try{
        let usr = await CRUD.findById(req.params.id);
        console.log()


        
         
    }catch{

         console.error(error.message);
        res.status(500).send("Internal Server Error")

    }
})

module.exports = router 


const express = require('express')

const cors = require('cors')

const {json,urlencoded} = require('express')


const app = express()
const mongoDB = require("mongodb")

const router = express.Router()
const {users} = require("./mongodb")

app.use(cors())

app.use(json())

const adduser = router.post("/addUser",async(req,res)=>{
    try {
        const data =await users.insertOne({...req.body})
        


        res.send(data)
    } catch (error) {
        console.log(error);
    }
})


const login = router.post("/login",async(req,res)=>{
    console.log(req.body);
    try {
        const {phone} = req.body

        const data =await users.findOne({phone :phone})
        if(!data){
            res.send("user not regisered")
        }else{
         
            res.send(data)
        }


        
        


    } catch (error) {
        console.log(error);
    }
})



const subscribe = router.post("/subscribe",async(req,res)=>{
    const {userId} = req.body
    try {
        console.log(req.body);
        const id = new mongoDB.ObjectId(userId)
        const data = await users.updateOne({_id:id},{$set:{Subscription : req.body.Subscription}})
        

        res.send(data)
    } catch (error) {
        console.log(error);
        
    }
})

app.use(adduser,login,subscribe)

app.listen(2000,()=>console.log("server running on port 2000"))
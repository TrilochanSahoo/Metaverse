import { Router } from "express";
import { userRoter } from "./user";
import { adminRouter } from "./admin";
import { spaceRouter } from "./space";
import client from "@metaverse/db/client"

export const router = Router()

router.get("/signin", async(req, res)=>{

    
})

router.get("/signup", async(req, res)=>{
    
    
})

router.get("/elements",(req,res)=>{

})

router.get("/avatars",(req,res)=>{
    
})

router.use("/user",userRoter)
router.use("/admin",adminRouter)
router.use("/space",spaceRouter)
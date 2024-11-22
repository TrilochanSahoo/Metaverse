import { Router } from "express";

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
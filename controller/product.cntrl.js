
const express = require("express")
const product=require("../controller/product.cntrl")


const router = express.Router()

router.get("",async (req,res)=>{

    try {
        const data = await product.find().lean().exec()
        return res.status(201).send(data)
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
})
router.post("",async(req,res)=>{


    try {
        const data = await product.create(req.body)
        return res.status(201).send(data)
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
        
    }
})


router.get("/city", async (req,res) => {
    try{
    
      const city = req.query.city;
        const showArt=await product.find({city:city}).lean().exec();
 
        return res.send(showArt);
    }catch(err){
      return res.send(err.message);
    } 
});


module.exports=router
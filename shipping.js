const express = require("express")

const router = express.Router()

router.post("/calculate",(req,res)=>{

const {cep,weight} = req.body

let price = 20

if(weight > 2)
price = 35

res.json({

frete: price,
prazo: "5 dias"

})

})

module.exports = router
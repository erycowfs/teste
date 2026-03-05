const express = require("express")
const db = require("../db")

const router = express.Router()

router.post("/add",(req,res)=>{

const {user,product} = req.body

db.query(
"INSERT INTO cart (user_id,product_id,quantity) VALUES (?,?,1)",
[user,product]
)

res.send("ok")

})

module.exports = router
const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

async function scrape(){

const url = "https://example.com"

const {data} = await axios.get(url)

const $ = cheerio.load(data)

let products = []

$(".product").each((i,el)=>{

products.push({

name: $(el).find(".title").text(),
price: $(el).find(".price").text()

})

})

fs.writeFileSync(
"products.json",
JSON.stringify(products,null,2)
)

}

scrape()
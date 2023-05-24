const express = require("express")
const app =express()
const port = 3000 

const path=require("path")
const x = path.join(__dirname , "../public")
app.use(express.static(x))

////////////////////////////////////////
const async=require('hbs/lib/async')



app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index',{
        title:"Home",
        desc:" this is home page"
    })
})

const forecast =require("./data.js/forecast")
const geocode= require("./data.js/geocode")

app.get('/weather',(req ,res)=>{
            if(!req.query.address){
            return res.send({
                error :"you mast provide an address"
        })
    }
geocode(req.query.address,(error,data)=>{
if(error){
    return res.send({error})
}
forecast(data.latitude,data.longtitude,(error,forecastData)=>{
    if(error){
        return res.send({error})
    } 
    res.send({
        forecast : forecastData,
        location :req.query.address,
        latitude:data.latitude,
        longtitude:data.longtitude
    })
})
})
})

        app.get("*",(req,res)=>{
            res.send("404 page not found")
        })
        
app.listen (port , () => {
    console.log(" EVERYTHING IS OKAY")
})



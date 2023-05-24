const request =require("request")
const forecast =(latitude , longtitude , callback )=>{
const url = "https://api.weatherapi.com/v1/current.json?key=f65e086cdb4840d18ad195659230805&q="+latitude +"," +longtitude
request({url,json: true},(error ,response)=>{
  
      if(error){
       callback("unable to connect weather service",undefined)

      }else if(response.body.error){
        callback(response.body.error.message ,undefined)
      }else{
       callback(undefined,response.body.location.name + " it is " + response.body.current.condition.text + " And Temp   " + response.body.current.temp_c)
      }
})
}
module.exports=forecast;
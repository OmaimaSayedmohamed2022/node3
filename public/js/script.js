let form =document.getElementById("form1")
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    weatherFunction()
    form.reset()
})
const errorF =document.getElementById("error")
const locationF =document.getElementById("loaction")
const forecastF =document.getElementById("forecast")
const latitudeF =document.getElementById("latitude")
const longtitudeF =document.getElementById("longtitude")
let weatherFunction =async()=>{
try{
address=document.getElementById('address').value
const res=await fetch('http://localhost:3000/weather?address='+address)
const data= await res.json()
console.log(data)
if(data.error){
   errorF.innerText = data.error
   locationF.innerText=""
   forecastF.innerText=""
   latitudeF.innerText=""
   longtitudeF.innerText=""
}else{
setTimeout(() => {
    locationF.innerText = data.location;
  }, 500);
  setTimeout(() => {
    forecastF.innerText = data.forecast;
  }, 1000);
  setTimeout(() => {
    latitudeF.innerText = data.latitude;
  }, 1500);
  setTimeout(() => {
    longtitudeF.innerText = data.longtitude;
  }, 2000);
  errorF.innerText = "";
}

}
catch(e){

    console.log(e)
}

}


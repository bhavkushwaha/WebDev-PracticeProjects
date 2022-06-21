const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var city = req.body.cityName;

  const query = "London";
  const apiKey = "ac7d9d9708c2a6b979fa8ded692b199f";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units="+unit;

  https.get(url,function(response) {
      console.log(response.statusCode);

      response.on("data",function(data){
        const weatherdata = JSON.parse(data);
        console.log(weatherdata);
        const temp = weatherdata.main.temp;
        const des = weatherdata.weather[0].description;
        const icon = weatherdata.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn"+icon+"@2x.png";
        res.write("<p>The weather of "+city+" is currently "+des+"</p>");
        res.write("<h1>The Temperature in "+city+" is "+temp+" Degree Celcius.</h1>");
        res.write("<img src="+imageURL+">");
        res.send();
      });
  });
});




app.listen(3000,function() {
  console.log("Server is running on port 3000.");
});

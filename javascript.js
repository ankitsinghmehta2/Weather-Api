const apikey="29f0c14e93ce78db087ec685d0e75be1"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weatherIcon")

async function checkweather(city){
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);;
    var data=await response.json()
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor (data.main
    .temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    console.log(data.weather[0].main)
    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="cloudy-day.png"
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src="sun.png"
    }
    else if (data.weather[0].main=="rain"){
        weatherIcon.src="rainy.png"
    }
   else if (data.weather[0].main == "wind") {

        weatherIcon.src="wind.png"
       
    }

}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);}
    )

const apiKey = '22acf05970637b4f34b8e5107a9cc906';
requests = []
cities = []

function del(x){
  cities.splice(x,1)
  localStorage.setItem("cities", JSON.stringify(cities))
  reloadtiles()
}

function add(){
    if(cities.length >= 10){
      alert("Too many locations. Please remove one")
    }
  else{
    cityname = document.getElementById("searchbar").value
    cities.push(cityname)
    localStorage.setItem("cities", JSON.stringify(cities))
    reloadtiles()
  }
}

window.onload = function(){
  cities = JSON.parse(localStorage.getItem("cities"))
  if(cities == null){
    cities = []
  }
  loadtiles()
}

function reloadtiles(){
  document.getElementById("tiles").innerHTML = ""
  loadtiles()
}
function loadtiles(){
  tiles = document.getElementById("tiles")
  if(cities.length == 0){
    tiles.innerHTML += "No Data to display"
  }
  else{
    for(let i = 0;i < cities.length;i++){
        url = "http://api.openweathermap.org/geo/1.0/direct?q="+cities[i]+"&limit=5&appid=22acf05970637b4f34b8e5107a9cc906"
      fetch(url)
      .then(response => response.json())
      .then(data => {
      url2 = "https://api.openweathermap.org/data/2.5/weather?lat="+data[0].lat+"&lon="+data[0].lon+"&appid=22acf05970637b4f34b8e5107a9cc906&units=metric"
      fetch(url2)
        .then(response => response.json())
        .then(data => {
        temperature = data.main.temp.toString().split(".").slice(0, 1) + "°C" 
        icon = "<img src = 'http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png' alt='asd'>"
        tiles.innerHTML += "<div id='tile'><div id='city'>"+cities[i]+"</div><div id='icon'>"+icon+"</div><div id='temp'>"+temperature+"</div><div id='humidity'>Humidity:"+data.main.humidity+"%</div><div id='btn'><button onClick='del("+i+")'>Delete</button><div></div>"
      })
      .catch(error => {
        console.error(error)
      });
      })
      .catch(error => {
        console.error(error)
    })
  }
  }
}

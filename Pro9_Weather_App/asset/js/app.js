let search = document.querySelector('.input-search');

let city = document.querySelector('.address .city')
let country = document.querySelector('.address .country')
let time = document.querySelector('.time')
let temperature = document.querySelector('.temperature .value')
let shortDesc = document.querySelector('.short-desc')

let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let cloud = document.querySelector('.cloud span')

let content = document.querySelector('.content');
content.classList.add('hide');

function changeWeatherUI(data) {

    if (data.cod == 200) {
        content.classList.remove('hide');

        city.innerHTML = data.name;
        country.innerHTML = data.sys.country;

        time.innerHTML = new Date().toLocaleString();

        const temp = Math.round(data.main.temp - 273.15);
        temperature.innerHTML = temp;
        console.log(temp);

        temp >= 18
            ? (document.body.className = 'hot')
            : (document.body.className = 'cold')

        shortDesc.innerHTML = data.weather[0] && data.weather[0].main;

        visibility.innerHTML = data.visibility + ' (m)'
        wind.innerHTML = data.wind.speed + ' (m/s)'
        cloud.innerHTML = data.clouds.all + ' (%)'
    } else {
        content.classList.add('hide');
    }

}

search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        getWeather(e.target.value)
    }
})



async function getWeather(input) {

    apiURL = `http://api.openweathermap.org/data/2.5/weather?appid=73af23c1d247a435aa8dce19fc83c958&q=${input}`

    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);

    changeWeatherUI(data)
}

getWeather('hà nội');




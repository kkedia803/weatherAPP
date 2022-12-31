let cityRef = document.getElementById("city");
let result = document.getElementById("result");
let button = document.getElementById("search-btn");

let weather = () => {
    let cityVal = cityRef.value;

    if (cityVal.length == 0) {
        result.innerHTML = `<h3 class='pl'>PLEASE ENTER CITY NAME!!</h3>`;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=24702da814d78123e304d794e5dac835&units=metric`;

        cityRef.value = "";

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                console.log(data.name);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.main.humidity);
                console.log(data.main.pressure);
                console.log(data.main.temp_max);
                console.log(data.main.temp_min);
                result.innerHTML = `
                 <h2>${data.name}</h2>
                 <h3 class='desc'>${data.weather[0].description}</h3>
                 <h3 class='weather'>${data.weather[0].main}</h3>
                 <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                 <h1>${data.main.temp} &#176;</h1>
                 <div class="temp-container">
                    <div>
                        <h4 class="title">MIN</h4>
                        <h4 class="temp">${data.main.temp_min}&#176;</h4>
                    </div>
                    <div>
                        <h4 class="title">MAX</h4>
                        <h4 class="temp">${data.main.temp_max}&#176;</h4>
                    </div>
                </div>`;

            })
            .catch(() => {
                result.innerHTML = `<h3 class='pl'>CITY NAME IS NOT VALID!!!</h3>`;
            });
    }
};

button.addEventListener("click", weather);
window.addEventListener("load", weather);


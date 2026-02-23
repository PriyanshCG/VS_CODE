var btn = document.querySelector('.btn');
var card = document.querySelector('.card');
var input = document.querySelector('.text');
var output = document.querySelector('.output');

function cardMaker(data1) {
    var box = document.createElement('div');
    box.classList.add("weatherBox");

    var img = document.createElement('img');
    img.src = data1.current.condition.icon;
    img.onerror = () => img.src = "https://via.placeholder.com/120?text=No+Image";

    var p1 = document.createElement('p');
    p1.textContent = `Location: ${data1.location.name}, ${data1.location.region}`;

    var p2 = document.createElement('p');
    p2.textContent = `Temperature: ${data1.current.temp_c}°C`;

    var p3 = document.createElement('p');
    p3.textContent = `Condition: ${data1.current.condition.text}`;

    var p4 = document.createElement('p');
    p4.textContent = `Humidity: ${data1.current.humidity}%`;

    var p5 = document.createElement('p');
    p5.textContent = `Wind: ${data1.current.wind_kph} km/h`;

    box.appendChild(img);
    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(p3);
    box.appendChild(p4);
    box.appendChild(p5);

    card.appendChild(box);
}

function loadWeather() {
    if (input.value.length == 0) {
        output.textContent = "Enter a city name!";
        return;
    }

    output.textContent = "";
    card.innerHTML = "";

    var url = `http://api.weatherapi.com/v1/current.json?key=6ba1a7faa33c4a3193a83812251212&q=${input.value}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data1 => {
            if (data1.error) {
                output.textContent = "City not found!";
                return;
            }

            cardMaker(data1);
        })
        .catch(error => {
            console.log("got an error");
            output.textContent = "Something went wrong!";
        });
}

btn.addEventListener("click", loadWeather);

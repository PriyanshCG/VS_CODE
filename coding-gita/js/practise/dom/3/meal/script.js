var btn = document.querySelector('.btn');
var card = document.querySelector('.card');
var count = 0;
var input = document.querySelector('.text');
var p1 = document.querySelector('.output');

function cardMaker(data1) {
    var img = document.createElement('img');
    img.src = data1.strMealThumb;

    var p1 = document.createElement('p');
    p1.textContent = `id value: ${++count} ${data1.strMeal}`;

    var p2 = document.createElement('p');
    p2.textContent = data1.strInstructions;

    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
}

function loadApi() {
    console.log(input.value);
    if (input.value.length > 1) {
        p1.textContent = "Enter only ONE character!";
        return;
    }
    else if (input.value.length == 0) {
        p1.textContent = "Enter atleast one character!";
        return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input.value}`)
        .then((response) => response.json())
        .then((data1) => {
            console.log(data1.meals);

            // clear old data
            card.innerHTML = "";
            count = 0;

            // FIXED: i < length
            for (let i = 0; i < data1.meals.length; i++) {

                // FIXED: correct setTimeout
                setTimeout(() => {
                    cardMaker(data1.meals[i]);
                }, i * 2000);
            }
        })
        .catch((error) => {
            console.log("got an error");
        });
}

btn.addEventListener("click", loadApi);

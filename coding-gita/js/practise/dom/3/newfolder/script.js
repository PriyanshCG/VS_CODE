var btn = document.querySelector('.btn');
var card = document.querySelector('.card');
var count = 0;
var input = document.querySelector('.text');
var p1 = document.querySelector('.output');

function cardMaker(data1) {
    var box = document.createElement('div');

    var img = document.createElement('img');
    img.src = data1.photo_url;
    img.onerror = () => img.src = "https://via.placeholder.com/300x200?text=No+Image";

    var p1 = document.createElement('p');
    p1.textContent = `id value: ${++count} — ${data1.title}`;

    var p2 = document.createElement('p');
    p2.textContent = data1.description;

    box.appendChild(img);
    box.appendChild(p1);
    box.appendChild(p2);

    card.appendChild(box);
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

    fetch(`https://real-time-news-data.p.rapidapi.com/search?query=${input.value}&limit=10&time_published=anytime&country=US&lang=en&rapidapi-key=a532374adbmsh359291b9edf7d9fp153311jsn13c18e621ea3`)
        .then((response) => response.json())
        .then((data1) => {
            console.log(data1.data);

            card.innerHTML = "";
            count = 0;

            for (let i = 0; i < data1.data.length; i++) {
                setTimeout(() => {
                    cardMaker(data1.data[i]);
                }, i * 200);
            }
        })
        .catch((error) => {
            console.log("got an error");
        });
}

btn.addEventListener("click", loadApi);

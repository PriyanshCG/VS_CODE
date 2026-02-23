var btn = document.querySelector('.btn');
var text = document.querySelector('.text');
var p1 = document.querySelector('p');
var data1 = document.querySelector('.dataContain');

function loadApi() {
    data1.innerHTML = ""; // clear old data

    fetch(`https://api.mfapi.in/mf/search?q=${text.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            for (let i = 0; i < 15 && i < data.length; i++) {
                var codeP = document.createElement('p');
                codeP.textContent = data[i].schemeCode;
                codeP.style.color = "green";

                var nameP = document.createElement('p');
                nameP.textContent = data[i].schemeName;
                nameP.style.color = "brown";

                var div = document.createElement('div');
                div.appendChild(codeP);
                div.appendChild(nameP);

                data1.appendChild(div);
            }
        })
        .catch(err => console.log("Error:", err));
}

btn.addEventListener("click", loadApi);

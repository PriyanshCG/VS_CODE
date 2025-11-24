const  saveLocalButton= document.getElementById("savelocalbtn");
const retrieveLocalButton=document.getElementById("retrievelocalbtn");
const savesessionButton=document.getElementById("savesessionbtn");
const retrievesessionButton=document.getElementById("retrievesessionbtn");

const outputperagraph=document.getElementById("output");

console.log(outputperagraph);

// Save to Local Storage

// When the "Save to Storage" button is clicked, the city name "Mumbai" is saved to 
// the local storage using localStorage.setItem(). The outputParagraph displays
// a message confirming the save.


saveLocalButton.addEventListener("click",function()
{
    localStorage.setItem("citylocal","Mumbai");
    outputperagraph.textContent="City saved to local Storage : Mumnai";

});

retrieveLocalButton.addEventListener("click",function(){
    const savecitylocal=localStorage.getItem("citylocal");
    if(savecitylocal)
    {
        outputperagraph.textContent="City retrieved from Local Storage: " + savecitylocal;

    }
    else
    {
         outputperagraph.textContent="City not found in Local Storage: " ;
    }
});

// Save to Session Storage

savesessionButton.addEventListener("click",function()
{
    sessionStorage.setItem("citySession","Delhi");
    outputperagraph.textContent="City saved to Session Storage: Delhi";
});

// Retrieve from Session Storage

retrievesessionButton.addEventListener("click",function()
{
    const savecitySession=sessionStorage.getItem('citySession');

    if(savecitySession)
    {
         outputperagraph.textContent="City retrieved from session Storage: " + savecitySession;
    }
    else{
         outputperagraph.textContent="City not found in session Storage: " ;
    }

});
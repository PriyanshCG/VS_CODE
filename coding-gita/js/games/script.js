var img = document.querySelector('img');
var nxtBtn = document.querySelector('button');
const imgContainer= [
    "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" ,
    "https://preview.redd.it/random-question-but-does-anyone-have-versions-of-this-cat-v0-ya8qikz9kn0f1.png?width=640&crop=smart&auto=webp&s=2487b53aa5d4ac4e710f7717a6850c83562272ab",
    "https://i.pinimg.com/736x/af/23/0d/af230dc0fda2e962661e1c1239230eac.jpg" 
]

var count = 0;
function nxtImg(){
    img.setAttribute('src',imgContainer[count]);
    count++;
    if(count==3){
        count = 0;
    }
}
nxtBtn.addEventListener('click', nxtImg);
document.getElementById('getImages').addEventListener('click',getImages);
function getImages(){
    fetch('https://raw.githubusercontent.com/JavaScriptNoob/HackersDetektor/973cde7f2977d589b4f4c1166a480cdc3cff4394/crazyjson/laborewave.json')
    .then((res)=> res.json())
    .then((data) =>{
     let output='';
     data.forEach(function(images){
         output +=` <div class='workWithMe'>  <img class="image-board" src="${images.image}" alt="">    </div>
         `;
     });
document.getElementById('container').innerHTML=output;
    })
    .catch((err)=>console.log(err))
}
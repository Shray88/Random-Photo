const container = document.querySelector(".container");
const btn = document.querySelector(".more");


btn.addEventListener("click",()=>{
    addImages();
});

function addImages(){
    for (let i = 0; i < 6; i++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/200?random=${Math.floor(Math.random()*1000)}`;
        container.appendChild(img);
    }

}
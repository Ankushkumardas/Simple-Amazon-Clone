const imgs = document.querySelectorAll(".header-slider ul img");
// console.log(imgs)
const prevbtn = document.querySelector(".control-prev");
// console.log(prevbtn);
const nxtbtn = document.querySelector(".control-next");

let n = 0;

function changeslide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeslide();

prevbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (n > 0) {
        n--;
    }
    else {
        n = imgs.length - 1;
    }
    changeslide();
})

nxtbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (n < imgs.length -1) {
        n++;
    }
    else {
        n = 0;
    }
    changeslide();
})

const scrollcontainer=document.querySelectorAll(".products");
for(let item of scrollcontainer){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft +=e.deltaY;
    })
}
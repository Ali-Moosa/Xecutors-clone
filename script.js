let hide = document.getElementById("hide");
let nav = document.querySelector(".nav-contain");
let block = document.querySelector(".block");
let heros = document.querySelector(".heros-imgs");
let logo = document.querySelector(".logo");
let left = document.querySelector(".left-one");
let section1 =document.querySelector(".sec1");
let navigation = document.querySelector(".nav-btn-div");

hide.addEventListener("click", ()=>{
    nav.style.display="none";
    block.style.display="block";
    heros.style.display="block";
    left.style.display="block";
});

block.addEventListener("click", () => {
    nav.style.display="block";
    block.style.display="none";
});

hide.addEventListener("click",()=>{
    if (window.matchMedia("(max-width: 530px)").matches) {
        logo.style.display="block";
        navigation.style.width="0px";
        
    }
});

block.addEventListener("click",()=>{
    if (window.matchMedia("(max-width: 530px)").matches) {
        nav.style.display="block";
        block.style.display="none";
        heros.style.display="none";
        left.style.display="none";
        logo.style.display="none";
    }
    })

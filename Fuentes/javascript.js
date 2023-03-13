const novia = document.getElementById("novia");
const moda = document.querySelector(".moda");
const cerrar = document.querySelector(".modal_close");
const PC = document.getElementById("PC");
const moda2 = document.querySelector(".moda2");
const cerrar2 = document.querySelector(".modal_close2");


novia.addEventListener("click",(e)=>{
    e.preventDefault;
    moda.classList.add("modal--show");
}); 
cerrar.addEventListener("click",(e)=>{
    e.preventDefault;
    moda.classList.remove("modal--show");
}) 

PC.addEventListener("click",(e)=>{
    e.preventDefault;
    moda2.classList.add("modal--show");
}); 
cerrar2.addEventListener("click",(e)=>{
    e.preventDefault;
    moda2.classList.remove("modal--show");
}); 

document.getElementById("invadirPeru").addEventListener("click",(e)=>{
    e.preventDefault;
    alert("Quieres invadir bolivia posta?, alto rarito")
});
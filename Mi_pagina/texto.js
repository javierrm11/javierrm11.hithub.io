window.addEventListener("scroll",function(){
    var header=document.querySelector("a.Titulo");
    header.classList.toggle("abajo",window.scrollY>0);
})


window.addEventListener("scroll",function(){
    var header=document.querySelector("nav.Navegacion");
    header.classList.toggle("abajo1",window.scrollY>0);
})

window.addEventListener("scroll",function(){
    var header=document.querySelector("header.cabecera");
    header.classList.toggle("abajo2",window.scrollY>70);
})
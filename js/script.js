btn = document.getElementById("boton-up");
btn.addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 15));
    }
}
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 250)
        btn.style.transform = "scale(1)";
    else if(scroll < 250)
        btn.style.transform = "scale(0)";
}
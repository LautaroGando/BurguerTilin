window.addEventListener("scroll", function() {

    let header = document.querySelector(".nav-menu");
    header.classList.toggle("abajo", window.scrollY>0);

});
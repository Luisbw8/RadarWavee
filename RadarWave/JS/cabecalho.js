let lastScrollTop = 0;
const cabeca = document.getElementById('cabeca');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        cabeca.style.top = "-115px";  
    } else {
        cabeca.style.top = "0";  
    }
    
    lastScrollTop = scrollTop;

    if (scrollTop > 50) {
        cabeca.classList.add('scrolled');
    } else {
        cabeca.classList.remove('scrolled');
    }
});

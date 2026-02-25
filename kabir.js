window.addEventListener("scroll", function(){
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }
    });
});
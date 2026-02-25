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

window.addEventListener("scroll", function () {

    const skillSection = document.querySelector("#skills");
    const skillBars = document.querySelectorAll(".skill-bar-fill");

    const sectionTop = skillSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if (sectionTop < triggerPoint) {

        skillBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.setProperty("--skill-width", width);
            bar.classList.add("animated");
        });
   
    }
});


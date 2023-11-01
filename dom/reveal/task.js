const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener("scroll", () => {
    reveal.forEach((el) => {
     const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) { return }
    else if (top > window.innerHeight) { return }
    else {
        el.classList.add('reveal_active')
    }   
    })
});



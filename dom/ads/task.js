const phrases = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

setInterval(() => {
    if (index > 5) {
        index = 0;
    }
    phrases.forEach(p => { p.classList.remove('rotator__case_active') })
    phrases[index].classList.add('rotator__case_active');
    index++;
}, 1000);
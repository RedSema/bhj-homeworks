
const elementsHasTooltip = document.querySelectorAll('.has-tooltip');

elementsHasTooltip.forEach(el => {
    let tip = document.createElement("div");
    tip.textContent = el.title;
    tip.className = "tooltip";
    el.append(tip);

    let coordinates = tip.getBoundingClientRect();
    let left = coordinates.left + (el.offsetWidth - tip.offsetWidth) / 2;
    if (left < 0) left = 0;
    let top = coordinates.top - tip.offsetHeight - 5;
    if (top < 0) {
        top = coordinates.top + el.offsetHeight + 5;
    }

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
});

const showTip = (event) => {
    const activeTips = document.querySelectorAll('.tooltip_active');
    activeTips.forEach(el => { el.classList.remove('tooltip_active'); })

    event.preventDefault();
    let tip = event.currentTarget.firstElementChild;
    tip.classList.add('tooltip_active');


};


elementsHasTooltip.forEach(el => { el.addEventListener('click', showTip) });
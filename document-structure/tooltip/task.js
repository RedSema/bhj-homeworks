
const elementsHasTooltip = document.querySelectorAll('.has-tooltip');

elementsHasTooltip.forEach(el => {
    let tip = document.createElement("div");
    tip.textContent = el.title;
    tip.className = "tooltip";
    el.append(tip);
});

const showTip = (event) => {
    const activeTips = document.querySelectorAll('.tooltip_active');
    activeTips.forEach(el => { el.classList.remove('tooltip_active'); })

    event.preventDefault();
    let tip = event.currentTarget.firstElementChild;
    tip.classList.add('tooltip_active');
    tip.setAttribute('data-position', 'top');
};


elementsHasTooltip.forEach(el => { el.addEventListener('click', showTip) });
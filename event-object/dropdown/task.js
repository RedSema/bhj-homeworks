const dropdown = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdown.addEventListener('click', () => {
    if(dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
    dropdownList.classList.add('dropdown__list_active');
    }
})


for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', (event) => {    
        event.preventDefault();
        console.log(event.target.textContent);
        dropdown.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    })
}



const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active');
            contents[i].classList.remove('tab__content_active');
        }
      tabs[i].classList.add('tab_active');
      contents[i].classList.add('tab__content_active');
    })
}
const controls = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

const removeFontSize = () => {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
};

controls.forEach((c) => {
    c.addEventListener("click", (event) => {
        event.preventDefault();
        controls.forEach((control) => { control.classList.remove('font-size_active') })
        event.target.classList.add('font-size_active');
        if (event.target.classList.contains('font-size_small')) {
            removeFontSize();
            book.classList.add('book_fs-small');
        }
        else if (event.target.classList.contains('font-size_big')) {
            removeFontSize();
            book.classList.add('book_fs-big');
        } else {
            removeFontSize();
        }
    })
})



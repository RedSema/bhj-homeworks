const decButtons = document.querySelectorAll('.product__quantity-control_dec');
const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

decButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let parent = event.target.parentNode;
        let count = parent.querySelector('.product__quantity-value').textContent.trim();
        count--;
        if (count < 1) { count = 1; }
        parent.querySelector('.product__quantity-value').textContent = count;
    });
})

incButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let parent = event.target.parentNode;
        let count = parent.querySelector('.product__quantity-value').textContent.trim();
        count++;
        parent.querySelector('.product__quantity-value').textContent = count;
    });
})

addButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const element = event.target.closest('div[data-id]');
        const id = element.getAttribute('data-id');
        const image = element.querySelector('img').getAttribute('src');
        const count = element.querySelector('.product__quantity-value').textContent.trim();

        const productInCart = cart.querySelector(`[data-id='${id}']`);
        if (productInCart) {
            let productInCartCount = productInCart.querySelector('.cart__product-count');
            productInCartCount.textContent = Number(productInCartCount.textContent.trim()) + Number(count);
        } else {

            let product = document.createElement("div");
            product.className = 'cart__product';
            product.dataset.id = id;

            let productImage = document.createElement("img");
            productImage.className = 'cart__product-image';
            productImage.src = image;

            let productCount = document.createElement("div");
            productCount.className = 'cart__product-count';
            productCount.textContent = count;

            product.append(productImage);
            product.append(productCount);

            cart.append(product);
        }
    });

})

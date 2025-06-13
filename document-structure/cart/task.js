document.querySelectorAll('.product__quantity-control_dec').forEach((e) => {
    e.addEventListener('click', (e) => {
        if ( Number(e.target.nextElementSibling.textContent) >= 1) {
            e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) - 1
        }
    })
})
document.querySelectorAll('.product__quantity-control_inc').forEach((e) => {
    e.addEventListener('click', (e) => {
        e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1
    })
})
const products = [];
document.querySelectorAll('.product').forEach((e) => {
    products.push(e)
})
console.log(products);
document.querySelectorAll('.product__add').forEach((e) => {
    e.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const product_cart = `<div class="cart__product" data-id="${product.getAttribute('data-id')}">
        <img class="cart__product-image" src="${e.target.closest('.product').firstElementChild.nextElementSibling.src}">
        <div class="cart__product-count">${e.target.previousElementSibling.firstElementChild.nextElementSibling.textContent}</div>
        </div>`
        if (true) {
            if( document.querySelector('.cart__product')) {
                document.querySelector('.cart__product').insertAdjacentHTML('afterend', product_cart)
            } else {
                document.querySelector('.cart__products').innerHTML = product_cart
            }
        }
    })
}) 

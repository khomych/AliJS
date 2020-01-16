'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const btnCart = document.getElementById('cart');
    const btnWishlist = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cartModal = document.querySelector('.cart');
    const btnCartClose = cartModal.querySelector('.cart-close');







    const createCardGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `
        <div class="card">
            <div class="card-img-wrapper">
                <img class="card-img-top" src="${img}" alt="">
                <button class="card-add-wishlist" data-giids-id = "${id}"></button>
            </div>
            <div class="card-body justify-content-between">
                <a href="#" class="card-title">${title}</a>
                <div class="card-price">${price} ₽</div>
                <div>
                    <button class="card-add-cart">Добавить в корзину</button>
                </div>
            </div>
        </div>`;


        return card;
    }

    const renderCard = (item) => {
        goodsWrapper.textContent = '';
        item.forEach(({ id, title, price, imgMin }) => {
            goodsWrapper.appendChild(createCardGoods(id, title, price, imgMin));
        });
    };

    const getGoods = (handler) => {
        fetch('db/db.json')
            .then(response => response.json())
            .then(handler);
    };

    const openCart = (event) => {
        event.preventDefault();
        document.addEventListener('keydown', closeCart);
        cartModal.style.display = 'flex';
    };

    const closeCart = (event) => {
        const target = event.target;
        if (target.classList.contains('cart') || target.classList.contains('cart-close') ||
            event.keyCode === 27) {
            cartModal.style.display = 'none';
        }

        document.removeEventListener('keydown', closeCart);
    };


    btnCart.addEventListener('click', openCart);
    cartModal.addEventListener('click', closeCart);

    getGoods(renderCard);









});
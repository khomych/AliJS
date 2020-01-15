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
                <img class="card-img-top" src="./img/temp/${img}" alt="">
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

    const openCart = (event) => {
        event.preventDefault();
        cartModal.style.display = 'flex';
    };

    const closeCart = (event) => {
        const target = event.target;
        event.preventDefault();
        if (target.classList.contains('cart') || target.classList.contains('cart-close')) {
            cartModal.style.display = 'none';
        }
    };


    goodsWrapper.appendChild(createCardGoods(0, 'test0', 1001, 'Flamingo.jpg'));
    goodsWrapper.appendChild(createCardGoods(1, 'test1', 1002, 'Socks.jpg'));
    goodsWrapper.appendChild(createCardGoods(2, 'test2', 1003, 'Socks.jpg'));
    goodsWrapper.appendChild(createCardGoods(3, 'test3', 1004, 'Archer.jpg'));
    goodsWrapper.appendChild(createCardGoods(4, 'test4', 1005, 'Flamingo.jpg'));
    goodsWrapper.appendChild(createCardGoods(5, 'test5', 1006, 'Archer.jpg'));

    btnCart.addEventListener('click', openCart);
    cartModal.addEventListener('click', closeCart);
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) {
            cartModal.style.display = 'none';
        }
    });








});
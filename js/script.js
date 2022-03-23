'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // МЕНЮ
    const menu = document.querySelector('.menu');
    const mobileMenu = document.createElement('div');
    const closeMenu = document.createElement('div');
    const header = document.querySelector('.header');

    // Адаптивное меню
    mobileMenu.classList.add('mobile-menu');
    closeMenu.classList.add('close');
    mobileMenu.prepend(menu.cloneNode(true));
    mobileMenu.prepend(closeMenu);
    document.body.prepend(mobileMenu);

    const navbarBurger = document.querySelector('.navbar__burger');

    navbarBurger.addEventListener('click', e => {
        if (e.target.classList.contains('navbar__burger')) {
            e.target.classList.add('navbar__burger_active');
        } else {
            e.target.parentNode.classList.add('navbar__burger_active');
        }
        mobileMenu.classList.add('mobile-menu_active');
    });

    closeMenu.addEventListener('click', e => {
        mobileMenu.classList.remove('mobile-menu_active');
        navbarBurger.classList.remove('navbar__burger_active');
    });

    // Фексированное меню
    window.addEventListener('scroll', function() {
        const posScroll = 300;
        if (window.pageYOffset >= posScroll) {
            header.classList.add('fixed');
            setTimeout(() => header.classList.add('transition'), 100);
        } else if (window.pageYOffset <= 0) {
            header.classList.remove('fixed');
            header.classList.remove('transition');
        }
    });

    // ТОВАРЫ

    const priseContainer = document.querySelector('.price__container'),
          productCard = document.querySelector('.product-card'),
          cardClose = document.querySelector('.product-card__close');

    // Корзина
    let cartList = {};
    // Список товаров
    let productList = {
        id_000001: {
            id: '000001',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000002: {
            id: '000002',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000003: {
            id: '000003',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000004: {
            id: '000004',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000005: {
            id: '000005',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000006: {
            id: '000006',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000007: {
            id: '000007',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000008: {
            id: '000008',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000009: {
            id: '000009',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000010: {
            id: '000010',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000011: {
            id: '000011',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
        id_000012: {
            id: '000012',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 12.56,
            currency: '&#8381',
            cart: false

        },
    };

    // Выводим картовки товара на страницу
    function addProduct(product, priseContainer) {
        const productTpl = document.createElement('div');

        productTpl.classList.add('product');
        productTpl.innerHTML = `
            <div class="product__id">${product.id}</div>
            <div class="product__preview">
                <img class="img-responsive product__img product__img" src="${product.img[0]}" alt="Фотография товар">
            </div>
            <div class="product__content">
                <h5 data-productid='${product.id}' class="title title_h5 product__title">
                    <a data-productid='${product.id}' href="#" class="link product__link">${product.title}</a>
                </h5>
                <div class="product__footer">
                    <span class="product__price">${product.price} <span class="product__currency">${product.currency}</span></span>
                    <span data-productid='${product.id}' class="product__cart">
                    <!-- <img data-productid='${product.id}' src="icons/cart.svg" alt="Добавить в козину"> -->
                    </span>
                </div>
            </div>
        `;
        priseContainer.append(productTpl);
    }

    for (const key in productList) {
        let product = productList[key];
        console.log(product.title);
        addProduct(product, priseContainer);
    }

    // Поиск товара в списке товаров
    function productSearch(productId, productList) {

        let result = {};
        for (const key in productList) {
            if (key === 'id_' + productId) {
                result = productList[key];
            }
        }
        return result;
    }

    // Поиск товара в корзине
    function productSearchCart(productId, cartList) {
        let result = true;
        if (typeof(cartList['id_' + productId]) === 'undefined') {
            result = false;
        }

        return result;
    }

    // Событие нажатия кнопки открыть карточку товара
    function productCardOpen(product) {
        const previewTpl = document.createElement('div'),
              controlsTpl = document.createElement('div'),
              descrTpl = document.createElement('div');

        previewTpl.classList.add('product-card__preview');
        previewTpl.innerHTML = `<img class="img-responsive product-card__img" src="${product.img[0]}" alt="Фотография товар">`;

        controlsTpl.classList.add('product-card__controls');
        controlsTpl.innerHTML = `
            <h5 class="title title_h5 product-card__title">${product.title}</h5>
            <div class="product-card__product-id">Код: <span>${product.id}</span></div>
            <div class="product-card__price">${product.price}</div>
            <a data-productid='${product.id}' href="#" class="link btn btn__product-card">Купить</a>
        `;

        descrTpl.classList.add('product-card__descr');
        descrTpl.innerHTML = product.description;

        productCard.append(previewTpl);
        productCard.append(controlsTpl);
        productCard.append(descrTpl);

        if (productSearchCart(product.id, cartList)) {
            const btn = productCard.querySelector('.btn__product-card');
            btn.classList.add('btn__product-card_active');
            btn.textContent = '';
        }

        productCard.classList.add('product-card_active');
        document.body.style.overflow = 'hidden';
    }

    priseContainer.addEventListener('click', e => {
        const event = e.target;

        if (event.classList.contains('product__link')) {
            e.preventDefault();
            const productId = event.dataset.productid;
            const product = productSearch(productId, productList);
            productCardOpen(product);
        } else if (event.classList.contains('product__title')) {
            const productId = event.dataset.productid;
            const product = productSearch(productId, productList);
            productCardOpen(product);
        }
    });


    // Событие нажатия кнопки закрыть карточку товара

    function productCardClose() {
        productCard.classList.remove('product-card_active');
        document.body.style.overflow = 'visible';
    }

    cardClose.addEventListener('click', () => {
        productCardClose();
        productCard.querySelector('.product-card__preview').remove();
        productCard.querySelector('.product-card__controls').remove();
        productCard.querySelector('.product-card__descr').remove();
    });


    // Событие нажатия кнопки "корзина" в карточке товара

    function productSearchInThePriceList(productId) {
        const priceList = document.querySelectorAll('.product__cart');
        let result;

        priceList.forEach(btn => {
            const btnProductId = btn.dataset.productid;
            if (btnProductId == productId) {
                result = btn;
            }
        });

        return result;
    }

    productCard.addEventListener('click', (e) => {
        e.preventDefault();
        const event = e.target;


        if (event.classList.contains('btn__product-card_active')) {
            shoppingCart.classList.add('shopping-cart_active');
        } else if (event.classList.contains('btn__product-card')) {
            const productId = event.dataset.productid;

            productSearchInThePriceList(productId).classList.add('product__cart_active');
            event.textContent = '';
            event.classList.add('btn__product-card_active');
            cartList['id_' + productId] = productSearch(productId, productList);
            addItemToСart(cartList, productId);
        }

    });

    // КОРЗИНА

    const cartBtn = document.querySelectorAll('.cart'),
          shoppingCart = document.querySelector('.shopping-cart'),
          shoppingCartClose = document.querySelector('.shopping-cart__close'),
          btnProductAddCart = document.querySelectorAll('.product__cart'),
          shoppingCartList = document.querySelector('.shopping-cart__list');


    // Открыть корзину
    cartBtn.forEach(e => {
        e.addEventListener('click', e => {
            shoppingCart.classList.add('shopping-cart_active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрыть корзину
    shoppingCartClose.addEventListener('click', e => {
        shoppingCart.classList.remove('shopping-cart_active');
        document.body.style.overflow = 'visible';
    });


    // ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ

    // Нажатие кнопки добавить товар в корзину
    function addItemToСart(cartList, productId) {
        const product = cartList['id_' + productId];
        const tpl = document.createElement('div');

        tpl.classList.add('shopping-cart__product');
        tpl.innerHTML = `
            <div class="shopping-cart__id">${product.id}</div>
            <div class="shopping-cart__title">${product.title}</div>
            <div class="shopping-cart__quantity">1</div>
            <div class="shopping-cart__price">${product.price}</div>
            <div class="shopping-cart__sum">12.56</div>
            <div class="shopping-cart__del">
                <img src="icons/close.svg" alt="Удалить товар из корзины">
            </div>
        `;
        shoppingCartList.append(tpl);
    }

    btnProductAddCart.forEach(btn => {
        btn.addEventListener('click', e => {
            const event = e.target;

            if (!event.classList.contains('product__cart_active')) {
                const productId = event.dataset.productid;
                event.classList.add('product__cart_active');
                cartList['id_' + productId] = productSearch(productId, productList);
                addItemToСart(cartList, productId);
            } else {
                shoppingCart.classList.add('shopping-cart_active');
            }

        });
    });

});
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
    let cartList = {
        orderTotal: 0
    };
    // Список товаров
    let productList = {
        id_000001: {
            id: '000001',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '4" Смартфон DEXP A440 8 ГБ розовый [4x(1.3 ГГц), 1 Гб, 2 SIM, TN, 800x480, камера 2 Мп, 3G, GPS, FM, 1440 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 3199,
            currency: '&#8381',
            cart: false

        },
        id_000002: {
            id: '000002',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '5" Смартфон INOI easyPhone 8 ГБ черный [4x(1.3 ГГц), 1 Гб, 2 SIM, IPS, 960x480, камера 5 Мп, 3G, GPS, 2500 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 3299,
            currency: '&#8381',
            cart: false

        },
        id_000003: {
            id: '000003',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '5" Смартфон DEXP G450 One 8 ГБ красный [4x(1.3 ГГц), 1 Гб, 2 SIM, TN, 854x480, камера 2 Мп, 3G, GPS, FM, 2000 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 3499,
            currency: '&#8381',
            cart: false

        },
        id_000004: {
            id: '000004',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '5" Смартфон DEXP G450 One 8 ГБ синий [4x(1.3 ГГц), 1 Гб, 2 SIM, TN, 854x480, камера 2 Мп, 3G, GPS, FM, 2000 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 3599,
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
            price: 100000,
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
            price: 200000,
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
            price: 99999,
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
            price: 9999,
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
            price: 6655,
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
            price: 552233,
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
            price: 442365,
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
            price: 869584,
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
                    <span class="product__price">${String(product.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} <span class="product__currency">${product.currency}</span></span>
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
              descrTpl = document.createElement('div'),
              container = productCard.querySelector('.product-card__wrapper');

        // previewTpl.classList.add('product-card__preview');
        // previewTpl.innerHTML = `<img class="img-responsive product-card__img" src="${product.img[0]}" alt="Фотография товар">`;

        // controlsTpl.classList.add('product-card__controls');
        // controlsTpl.innerHTML = `
        //     <h5 class="title title_h5 product-card__title">${product.title}</h5>
        //     <div class="product-card__product-id">Код: <span>${product.id}</span></div>
        //     <div class="product-card__price">${String(product.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}</div>
        //     <a data-productid='${product.id}' href="#" class="link btn btn__product-card">Купить</a>
        // `;

        // descrTpl.classList.add('product-card__descr');
        // descrTpl.innerHTML = product.description;

        // container.append(previewTpl);
        // container.append(controlsTpl);
        // container.append(descrTpl);

        // if (productSearchCart(product.id, cartList)) {
        //     const btn = productCard.querySelector('.btn__product-card');
        //     btn.classList.add('btn__product-card_active');
        //     btn.textContent = '';
        // }

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
            cartList['id_' + productId].quantity = 1;
            cartList['id_' + productId].total = cartList['id_' + productId].quantity * cartList['id_' + productId].price;
            addItemToСart(cartList, productId);
            summaryTotal(cartList);
            numberOfItemsInTheCart(cartList);
        }

    });

    // КОРЗИНА

    const cartBtn = document.querySelectorAll('.cart'),
          shoppingCart = document.querySelector('.shopping-cart'),
          shoppingCartClose = document.querySelector('.shopping-cart__close'),
          btnProductAddCart = document.querySelectorAll('.product__cart'),
          shoppingCartList = document.querySelector('.shopping-cart__list'),
          orderSummaryTotal = document.querySelector('.order-summary__total'),
          navbarCart = document.querySelector('.navbar__cart'),
          productCardCart = document.querySelector('.product-card__cart-sum'),
          shoppingCartBtn = document.querySelector('.shopping-cart__btn'),
          shoppingCartBtnBanner = document.querySelector('.shopping-cart__btn-banner'),
          orderSummaryPromocode = document.querySelector('.order-summary__promocode'),
          formPromocode = document.querySelector('.form__promocode');

    // Открыть поле ввода промокода
    orderSummaryPromocode.addEventListener('click', e => {
        formPromocode.classList.add('form__promocode_active');
    });

    // Открыть корзину
    cartBtn.forEach(e => {
        e.addEventListener('click', e => {
            shoppingCart.classList.add('shopping-cart_active');
            document.body.style.overflow = 'hidden';
            numberOfItemsInTheCart();
        });
    });

    // Закрыть корзину
    function cartClose() {
        shoppingCart.classList.remove('shopping-cart_active');
        document.body.style.overflow = 'visible';
    }

    shoppingCartClose.addEventListener('click', e => {
        e.preventDefault();
        cartClose();
    });

    shoppingCartBtn.addEventListener('click', e => {
        e.preventDefault();
        cartClose();
        shoppingCartClose();
    });

    shoppingCartBtnBanner.addEventListener('click', e => {
        e.preventDefault();
        cartClose();
        shoppingCartClose();
    });


    // ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ

    // Подсчитываем количество товаров в корзине
    function numberOfItemsInTheCart(cartList) {
        const shoppingCartCounters = shoppingCart.querySelectorAll('.shopping-cart__counter'),
              shoppingCartItems = shoppingCart.querySelector('.shopping-cart__items'),
              orderSummaryItems = shoppingCart.querySelector('.order-summary__items'),
              cartCounters = document.querySelectorAll('.cart__counter'),
              shoppingCartWrapper = document.querySelector('.shopping-cart__wrapper'),
              shoppingCartBanner = document.querySelector('.shopping-cart__banner');

        let total = 0;
        shoppingCartCounters.forEach(e => {
            total += Number(e.textContent);
        });

        shoppingCartItems.textContent = 'Товаров в корзине: ' + total;
        orderSummaryItems.textContent = 'Товаров в корзине: ' + total;
        cartCounters.forEach(e => {
            if (total > 0) {
                e.classList.add('cart__counter_active');
                e.textContent = total;
            } else {
                e.classList.remove('cart__counter_active');
            }
        });

        if (total == 0) {
            shoppingCartWrapper.classList.add('hidden');
            shoppingCartBtn.classList.add('hidden');
            shoppingCartBanner.classList.remove('hidden');
        } else {
            shoppingCartBanner.classList.add('hidden');
            shoppingCartWrapper.classList.remove('hidden');
            shoppingCartBtn.classList.remove('hidden');
        }

    }

    // Подстчитываем итоговую сумму товара
    function summaryTotal(cartList) {
        const sum = shoppingCart.querySelectorAll('[data-sum]');
        let total = 0;
        sum.forEach(e => {
            total += Number(e.textContent.split(' ').join(''));
        });
        cartList.orderTotal = total;
        orderSummaryTotal.innerHTML = String(cartList.orderTotal).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        navbarCart.innerHTML = String(cartList.orderTotal).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        productCardCart.textContent = String(cartList.orderTotal).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    }

    // Нажатие кнопки добавить товар в корзину
    function addItemToСart(cartList, productId) {
        const product = cartList['id_' + productId];
        const tpl = document.createElement('div');

        tpl.classList.add('shopping-cart__product');
        tpl.setAttribute('data-product', `${product.id}`);
        tpl.innerHTML = `
            <img class="shopping-cart__img" src="${product.img[0]}" alt="Фотография товара">
            <div data-title="${product.id}" class="shopping-cart__title">${product.title}</div>
            <div class="shopping-cart__quantity">
                <div class="shopping-cart__quantity-wrapper">
                    <span data-minus="${product.id}" class="shopping-cart__minus"></span>
                    <span data-counter="${product.id}" class="shopping-cart__counter">${product.quantity}</span>
                    <span data-plus="${product.id}" class="shopping-cart__plus"></span>
                </div>
            </div>
            <div class="shopping-cart__price">${String(product.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}</div>
            <div data-sum="${product.id}" class="shopping-cart__sum">${String((product.price * product.quantity)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}</div>
            <div data-del="${product.id}" class="shopping-cart__del"></div>
        `;
        shoppingCartList.append(tpl);
    }

    summaryTotal(cartList);

    btnProductAddCart.forEach(btn => {
        btn.addEventListener('click', e => {
            const event = e.target;

            if (!event.classList.contains('product__cart_active')) {
                const productId = event.dataset.productid;
                event.classList.add('product__cart_active');
                cartList['id_' + productId] = productSearch(productId, productList);
                cartList['id_' + productId].quantity = 1;
                cartList['id_' + productId].total = cartList['id_' + productId].quantity * cartList['id_' + productId].price;
                addItemToСart(cartList, productId);
                summaryTotal(cartList);
                numberOfItemsInTheCart(cartList);
            } else {
                shoppingCart.classList.add('shopping-cart_active');
            }

        });
    });

    // Удалить товар из корзины
    function removeItemFromCart(productId, cartList) {
        const shoppingCartProduct = document.querySelectorAll('.shopping-cart__product'),
              btnProductAddCart = document.querySelectorAll('.product__cart'),
              productCard = document.querySelector('.product-card');

        delete cartList['id_' + productId];

        shoppingCartProduct.forEach(item => {
            if (item.dataset.product == productId) {
                item.remove();
            }
        });

        btnProductAddCart.forEach(item => {
            if (item.dataset.productid == productId) {
                item.classList.remove('product__cart_active');
            }
        });

        if (productCard.classList.contains('product-card_active')) {
            const btn = productCard.querySelector('.btn__product-card'),
                  id = productCard.querySelector('.product-card__product-id span');
            console.log(id.textContent);
            if (id.textContent == productId) {
                btn.classList.remove('btn__product-card_active');
                btn.textContent = 'Купить';
            }
        }
        numberOfItemsInTheCart(cartList);
    }

    shoppingCart.addEventListener('click', e => {
        const btn = e.target;

        if (btn.classList.contains('shopping-cart__del')) {
            const productId = btn.dataset.del;

            removeItemFromCart(productId, cartList);
            summaryTotal(cartList);
            numberOfItemsInTheCart(cartList);

        }

    });

    // Открыть карточку товара из корзины

    shoppingCart.addEventListener('click', e => {
        const event = e.target;

        if (event.classList.contains('shopping-cart__title')) {
            const preview = document.querySelector('.product-card__preview');
            const controls = document.querySelector('.product-card__controls');
            const descr = document.querySelector('.product-card__descr');
            const productId = event.dataset.title;
            const product = productSearch(productId, productList);

            if (preview && controls && descr) {
                preview.remove();
                controls.remove();
                descr.remove();
            }
            cartClose();
            productCardOpen(product);
        }
    });

    // Счетчик товаров в корзине
    // Уменьшить количество товаров
    function goodsCounterMinus(productId, productList) {
        if (productList['id_' + productId].quantity > 1) {
            productList['id_' + productId].quantity--;

            if (productList['id_' + productId].quantity == 1) {
                const btns = shoppingCart.querySelectorAll('[data-minus]');

                btns.forEach(e => {
                    if (e.dataset.minus == productId) {
                        e.classList.remove('shopping-cart__minus_active');
                    }
                });
            }
        }
    }

    // Увеличить количество товаров
    function goodsCounterPlus(productId, productList) {
        const btns = shoppingCart.querySelectorAll('[data-minus]');

        btns.forEach(e => {
            if (e.dataset.minus == productId) {
                e.classList.add('shopping-cart__minus_active');
            }
        });

        productList['id_' + productId].quantity++;
    }

    // Изменяем значение счетчика товаров
    function goodsCounter(productId, cartList) {
        const counters = shoppingCart.querySelectorAll('[data-counter]');
        counters.forEach(e => {
            if (e.dataset.counter == productId) {
                e.innerHTML = cartList['id_' + productId].quantity;
            }
        });
    }

    // Пересчетать сумму товара
    function sum(productId, cartList) {
        const counters = shoppingCart.querySelectorAll('[data-sum]');
        counters.forEach(e => {
            if (e.dataset.sum == productId) {
                cartList['id_' + productId].total = cartList['id_' + productId].quantity * cartList['id_' + productId].price;
                e.innerHTML = String(cartList['id_' + productId].total).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
            }
        });
    }

    shoppingCart.addEventListener('click', (e) => {
        const btn = e.target;

        if (btn.classList.contains('shopping-cart__minus')) {
            const productId = btn.dataset.minus;
            goodsCounterMinus(productId, productList);
            goodsCounter(productId, cartList);
            sum(productId, cartList);
            summaryTotal(cartList);
            numberOfItemsInTheCart(cartList);
        } else if (btn.classList.contains('shopping-cart__plus')) {
            const productId = btn.dataset.plus;
            goodsCounterPlus(productId, productList);
            goodsCounter(productId, cartList);
            sum(productId, cartList);
            summaryTotal(cartList);
            numberOfItemsInTheCart(cartList);
        }
    });

    // СЛАЙДЕР
    const showImg = document.querySelector('.product-card__show-img img'),
          items = document.querySelectorAll('.product-card__wrapper-img img'),
          selectionImg = document.querySelector('.product-card__selection-img'),
          right = document.querySelector('.product-card__right'),
          left = document.querySelector('.product-card__left');

    let position = 0;

    selectionImg.addEventListener('click', e => {
        const event = e.target;

        if (event.classList.contains('product-card__img')) {
            items.forEach(item => {
                if (item == event) {
                    const src = event.getAttribute('src');
                    showImg.setAttribute('src', src);
                }
            });
        } else if (event.classList.contains('product-card__wrapper-img')) {
            const img = event.querySelector('img');

            items.forEach(item => {
                if (item == img) {
                    const src = img.getAttribute('src');
                    showImg.setAttribute('src', src);
                }
            });
        }
    });

    right.addEventListener('click', e => {
        const slid = items.length - 5;
        if (position < slid * 60) {
            position = position + 60;
            selectionImg.style.transform = `translateX(-${position}px)`;
        }
    });

    left.addEventListener('click', e => {
        const slid = items.length - 5;
        if (position > 0) {
            position = position - 60;
            selectionImg.style.transform = `translateX(-${position}px)`;
        }
    });

});


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

    // СЛАЙДЕР
    function sliderNew(container) {
        const images = document.querySelectorAll('.' + container + ' img'),
                slider =document.querySelector('.' + container),
                sliderWrapper = document.createElement('div'),
                sliderShowImg = document.createElement('div'),
                sliderSelectionImg = document.createElement('div'),
                right = document.createElement('span'),
                left = document.createElement('span'),
                rightImg = document.createElement('img'),
                leftImg = document.createElement('img');

        sliderWrapper.classList.add('slider__wrapper');
        sliderShowImg.classList.add('slider__show-img');
        sliderSelectionImg.classList.add('slider__selection-img');
        right.classList.add('slider__right');
        rightImg.classList.add('slider__right-img');
        left.classList.add('slider__left');
        leftImg.classList.add('slider__left-img');

        sliderShowImg.append(images[0].cloneNode(true));
        sliderWrapper.append(sliderShowImg);
        slider.append(sliderWrapper);

        images.forEach(img => {
            const sliderWrapperImg = document.createElement('div');

            img.classList.add('slider__img');
            sliderWrapperImg.classList.add('slider__wrapper-img');

            sliderWrapperImg.append(img);
            sliderSelectionImg.append(sliderWrapperImg);

        });
        sliderWrapper.append(sliderSelectionImg);

        rightImg.setAttribute('src', 'icons/angle-right-solid.svg');
        rightImg.setAttribute('alt', 'Сдвинуть в право');
        right.append(rightImg);
        slider.append(right);

        leftImg.setAttribute('src', 'icons/angle-left-solid.svg');
        leftImg.setAttribute('alt', 'Сдвинуть в лево');
        left.append(leftImg);
        slider.append(left);

        sliderStart();

    }

    function sliderStart() {
        const sliderShowImg = document.querySelector('.slider__show-img img'),
                sliderImg = document.querySelectorAll('.slider__img'),
                sliderSelectionImg = document.querySelector('.slider__selection-img'),
                right = document.querySelector('.slider__right'),
                left = document.querySelector('.slider__left'),
                sliderOverflowModal = document.querySelector('.slider__modal-overflow'),
                sliderCloseModal = document.querySelector('.slider__modal-close'),
                сardProduct = document.querySelector('.card-product');

        let position = 0;

        sliderSelectionImg.addEventListener('click', e => {
            const event = e.target;

            if (event.classList.contains('slider__img')) {
                sliderImg.forEach(item => {
                    if (item == event) {
                        const src = event.getAttribute('src');
                        sliderShowImg.setAttribute('src', src);
                    }
                });
            } else if (event.classList.contains('slider__wrapper-img')) {
                const img = event.querySelector('img');

                sliderImg.forEach(item => {
                    if (item == img) {
                        const src = img.getAttribute('src');
                        sliderShowImg.setAttribute('src', src);
                    }
                });
            }
        });

        right.addEventListener('click', e => {
            const slid = sliderImg.length - 5;
            if (position < slid * 60) {
                position = position + 60;
                sliderSelectionImg.style.transform = `translateX(-${position}px)`;
            }
        });

        left.addEventListener('click', e => {
            const slid = sliderImg.length - 5;
            if (position > 0) {
                position = position - 60;
                sliderSelectionImg.style.transform = `translateX(-${position}px)`;
            }
        });

        // Открыть модальное окно слайдера
        function openModal(overflow, img) {
            const src = img.target.getAttribute('src'),
                    sliderModalImg = overflow.querySelector('.slider__modal-img');

            сardProduct.style.overflow = 'hidden';
            sliderModalImg.setAttribute('src', src);
            overflow.classList.add('slider__modal-overflow_active');
        }

        // Закрыть модальное окно слайдера
        function closeModal(event) {
            event.classList.remove('slider__modal-overflow_active');
        }

        sliderShowImg.addEventListener('click', event => {
            openModal(sliderOverflowModal, event);
        });

        sliderCloseModal.addEventListener('click', event => {
            сardProduct.style.overflow = 'auto';
            closeModal(sliderOverflowModal);
        });
    }

    // ВАЛИДАЦИЯ ФОРМЫ

    function formValidation(form, arr) {
        let itemsForm = [];

        for (let i in arr) {
            const elem = form.querySelector(arr[i]);
            if (elem.value.length < 2) {
                elem.classList.add('form__input_err');
            } else {
                elem.classList.remove('form__input_err');
            }
        }

        const err = form.querySelectorAll('.form__input_err');

        return (err.length > 0) ? false : true;
    }

    // ТАБ ПАНЕЛЬ

    function tab(className) {
        const tab = document.querySelector(className),
                contrals = tab.querySelectorAll('.tab__header'),
                items = tab.querySelectorAll('.tab__item'),
                itemTitles = tab.querySelectorAll('.tab__item-title'),
                itemContents = tab.querySelectorAll('.tab__item-content');

        // Таб панель
        contrals.forEach(header => {
            header.addEventListener('click', e => {
                const event = e.target;

                contrals.forEach(header => {
                    header.classList.remove('tab__header_active');
                });

                event.classList.add('tab__header_active');

                for (let i = 0; i < contrals.length; i++) {
                    const element = contrals[i];
                    if (element.classList.contains('tab__header_active')) {
                        items.forEach(item => {
                            item.classList.remove('tab__item_active');
                        });
                        items[i].classList.add('tab__item_active');
                    }
                }

            });
        });

        // Аккордион
        itemTitles.forEach(title => {
            title.addEventListener('click', e => {
                const event = e.target;

                itemTitles.forEach(title => {
                    title.classList.remove('tab__item-title_active');
                });

                event.classList.add('tab__item-title_active');

                for (let i = 0; i < itemTitles.length; i++) {
                    const element = itemTitles[i];
                    if (element.classList.contains('tab__item-title_active')) {
                        itemContents.forEach(item => {
                            item.classList.remove('tab__item-content_active');
                        });
                        itemContents[i].classList.add('tab__item-content_active');
                    }
                }

            });
        });

    }

    tab('.tab');

    // Список товаров
    let productList = {
        id_000001: {
            id: '000001',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '4" Смартфон DEXP A440 8 ГБ розовый [4x(1.3 ГГц), 1 Гб, 2 SIM, TN, 800x480, камера 2 Мп, 3G, GPS, FM, 1440 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 1,
            currency: '&#8381',
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]
        },
        id_000002: {
            id: '000002',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '5" Смартфон INOI easyPhone 8 ГБ черный [4x(1.3 ГГц), 1 Гб, 2 SIM, IPS, 960x480, камера 5 Мп, 3G, GPS, 2500 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 1,
            currency: '&#8381',
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

        },
        id_000003: {
            id: '000003',
            img: ['img/prodact/prodact.png',
                  'img/prodact/prodact.png',
                  'img/prodact/prodact.png'],
            title: '5" Смартфон DEXP G450 One 8 ГБ красный [4x(1.3 ГГц), 1 Гб, 2 SIM, TN, 854x480, камера 2 Мп, 3G, GPS, FM, 2000 мА*ч]',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 1,
            currency: '&#8381',
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

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
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
            ]

        },
        id_000012: {
            id: '000012',
            img: ['img/prodact/3.jpg',
                  'img/prodact/banner_one_bg.png',
                  'img/prodact/promo_bg1.png',
                  'img/prodact/prodact.png',
                  'img/prodact/2.jpg',
                  'img/prodact/3.jpg'],
            title: 'Маленький ручеек Даль журчит по всей стране и обеспечивает',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit error dolorum tenetur ipsam consequuntur, ratione quo? Optio culpa, ullam repudiandae quia a totam velit ipsam. Mollitia labore ab explicabo! Sed sapiente doloribus officia odio nobis at illo, eligendi iste maxime quibusdam, vel delectus ex numquam doloremque. Ullam ab dolore amet?',
            price: 869584,
            currency: '&#8381',
            cart: false,
            specifications: [
                {
                    name: 'Количество симкарт',
                    value: '2 SIM'
                },
                {
                    name: 'Оперативная память',
                    value: '1 Гб'
                },
                {
                    name: 'Камера',
                    value: '2 Мп'
                },
                {
                    name: 'Фронтальная камера',
                    value: '3 Мп'
                },
            ]

        },
    };

    //++++++++++++++++++++++ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ++++++++++++++++++++++

    // Функция добавляет элементы на страницу согласно заданным параметрам:
    // classContainer - класса элемента, в который будут выведены элементы
    // object - объект содержащий элементы, которые должны быть веведены
    // template - шаблон соглласно, которому элементы будут представлены на странице
    function render(classContainer, object, template) {

        const container = document.querySelector(classContainer),
              parametrs = template.match(/(?<=\{\{)(.+?)(?=\}\})/gi);

        let tpl = template;

        for (const i in parametrs) {
            const parametr = `{{${parametrs[i]}}}`,
                  newParametr = (typeof(object) === 'object') ? `${object[parametrs[i]]}` : `${object}`;

            tpl = tpl.replace(parametr, newParametr);
        }

        container.insertAdjacentHTML('beforeend', tpl);

    }

    // Обновляем значение элемента
    function update(element, value) {
        element.innerHTML = value;
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

    // Очистка содиржимого элемента
    function clear(arr) {
        for (const key in arr) {
            const element = document.querySelector(arr[key]);
            element.innerHTML = '';
        }
    }

    // Поставить отметку, что товар в корзине
    function markItemInCart(productID, nameClass) {
        const buttonsAddToCart = document.querySelectorAll('.js-add-to-cart');

        buttonsAddToCart.forEach(btn => {
            const btnProductID = btn.dataset.productid;

            if (btnProductID === productID) {
                btn.classList.add(nameClass);
            }
        });
    }

    // Снять отметку, что товар в корзине
    function markItemNotInCart(productID, nameClass) {
        const buttonsAddToCart = document.querySelectorAll('.js-add-to-cart');

        buttonsAddToCart.forEach(btn => {
            const btnProductID = btn.dataset.productid;

            if (btnProductID === productID) {
                btn.classList.remove(nameClass);
            }
        });
    }

    //++++++++++++++++++++++ШАБЛОНЫ++++++++++++++++++++++

    // Шаблон карточки товара в каталоге
    const tplProduct = `
    <div class="product">
        <div class="product__id">{{id}}</div>
        <div class="product__preview">
            <img class="img-responsive product__img product__img" src="{{img}}" alt="Фотография товар">
        </div>
        <div class="product__content">
            <h5 data-productid='{{id}}' class="title title_h5 product__title">
                <a data-productid='{{id}}' href="#" class="link product__link">{{title}}</a>
            </h5>
            <div class="product__footer">
                <span class="product__price">{{price}} <span class="product__currency">{{currency}}</span></span>
                <span data-productid='{{id}}' class="product__cart js-add-to-cart"></span>
            </div>
        </div>
    </div>`;

    // шаблон вывода фото товара в карточке товара
    const tplImg = `<img src="{{img}}" alt="Закрыть карточку товара">`;

    // тестовый шаблон вывода спецификации
    const tplSpec = `
    <div>
        <span>{{name}}</span>
        <span>.........</span>
        <span>{{value}}</span>
    </div>`;

    // Шаблон вывода заголовка в карточки товара
    const tplTitle = `<h2 class="title title_h2">{{title}}</h2>`;

    // Шаблон вывода ID в карточке товара
    const tplID = `<span class="id">Код товара: {{id}}</span>`;

    // Шаблон вывода стоимости товара
    const tplPrice = `
    <span>{{price}}</span>
    <span> 	&#8381;</span>`;

    // Шаблон вывода стоимости товара
    const tplBtnAddToCart = `<a href="#" class="link btn btn__product-card js-add-to-cart" data-productid='{{id}}'>Купить</a>`;

    // Шаблон вывода товара в корзине
    const tplProductCart = `
    <div data-product="{{id}}" class="shopping-cart__product">
        <img class="shopping-cart__img" src="{{img}}">
        <div data-productid="{{id}}" class="shopping-cart__title">{{title}}</div>
        <div class="shopping-cart__quantity">
            <div class="shopping-cart__quantity-wrapper">
                <span data-minus="{{id}}" class="shopping-cart__minus js-shopping-cart__minus"></span>
                <span data-counter="{{id}}" class="shopping-cart__counter js-shopping-cart__counter">1</span>
                <span data-plus="{{id}}" class="shopping-cart__plus js-shopping-cart__plus"></span>
            </div>
        </div>
        <div class="shopping-cart__price">{{price}}</div>
        <div data-sum="{{id}}" class="shopping-cart__sum js-shopping-cart__sum">{{price}}</div>
        <div data-product="{{id}}" class="shopping-cart__del js-remove-item-from-cart"></div>
    </div>`;

    //++++++++++++++++++++++Классы объектов++++++++++++++++++++++

    // Объект "Товар"
    class Product {

        constructor(product) {
            this.id = product.id;
            this.img = product.img;
            this.title = product.title;
            this.description = product.description;
            this.price = String(product.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
            this.currency = product.currency;
            this.specifications = product.specifications;
        }

        // Возвращает объект описывающий товар
        object() {
            let object = {};

            object.id = this.id;
            object.img = this.img[0];
            object.title = this.title;
            object.description = this.description;
            object.price = this.price;
            object.currency = this.currency;
            object.specifications = this.specifications;

            return object;
        }

        // Массив картинок товара
        images() {
            return this.img;
        }

        // Спецификация
        spec() {
            return this.specifications;
        }
    }

    // Объект "Корзина"
    class Cart {

        constructor() {
            this.productList = {};
            this.totalItems = 0;
            this.totalSum = 0;
        }

        // Добавить товар в корзину
        addToCart(product) {
            this.productList[product.id] = product;
            this.productList[product.id].quantity = 1;
            this.sum(product.id);

            this.tItems();
            this.tSum();
        }

        // Увеличить количество товара на один
        increaseTheNumber(productID) {
            for (const key in this.productList) {
                if (productID === this.productList[key].id) {
                    this.productList[key].quantity += 1;
                    this.sum(productID);
                    this.tItems();
                    this.tSum();
                }
            }
        }

        // Уменьшить количество товара на один
        reduceTheNumber(productID) {
            for (const key in this.productList) {
                if (productID === this.productList[key].id) {
                    if (this.productList[key].quantity != 1) {
                        this.productList[key].quantity -= 1;
                        this.sum(productID);
                        this.tItems();
                        this.tSum();
                    }

                }
            }
        }

        // Итоговая стоимость товара
        sum(productID) {
            for (const key in this.productList) {
                if (productID === this.productList[key].id) {
                    const quantity = this.productList[key].quantity,
                          price = Number(this.productList[key].price.replace(/\s+/g, ''));
                    this.productList[key].sum = price * quantity;
                }
            }
        }

        // Подсчитываем общее количество товаров в корзине
        tItems() {
            let counter = 0;
            for (const key in this.productList) {
                counter += this.productList[key].quantity;
            }
            this.totalItems = counter;
        }

        // Подсчитываем итоговую сумму корзины
        tSum() {
            let counter = 0;
            for (const key in this.productList) {
                counter += this.productList[key].sum;
            }
            this.totalSum = counter;
        }

        // Удалить товар из корзины
        del(productID) {
            for (const key in this.productList) {
                if (productID === this.productList[key].id) {
                    delete this.productList[key];
                    this.tItems();
                    this.tSum();
                }
            }
        }

        // Проверка наличия товара в корзине
        search(productID) {
            return (this.productList[productID]) ? true : false;
        }

    }

    // Объект "Корзина"
    class Order {

        constructor(cart, userPhone, userEmail, userName) {
            this.productList = cart.productList;
            this.totalItems = cart.totalItems;
            this.totalSum = cart.totalSum;
            this.phone = userPhone;
            this.email = userEmail;
            this.name = userName;
        }
    }

    // Объект "Storage"
    class Storage {

        constructor(cart, order) {
            this.cart = cart;
            this.order = order;
            this.statusCart = 'disable';
            this.statusProdactCard = 'disable';
            this.statusOrder = 'disable';
        }
    }

    //++++++++++++++++++++++ИНТЕРНЕТ МАГАЗИН++++++++++++++++++++++

    const catalog = document.querySelector('.price-list');  // Каталог товара
    let cart = new Cart();                                  // Корзина товара

    // Выводим каталог товара на главную страницу
    for (const key in productList) {
        const product = new Product(productList[key]);
        render('.price-list', product.object(), tplProduct);
    }

    // Открытие/закрытие корзины
    const cartBtnOpen = document.querySelectorAll('.cart'),
          cartBtnClose = document.querySelector('.shopping-cart .ctrlpanel__close'),
          shoppingCart = document.querySelector('.shopping-cart'),
          continueShopping = document.querySelector('.js-continue-shopping'),
          shoppingCartBanner = document.querySelector('.js-shopping-cart__banner'),
          shoppingCartWrapper = document.querySelector('.js-shopping-cart__wrapper'),
          shoppingCartBtnBanner = document.querySelector('.js-shopping-cart__btn-banner');

    // Открыть корзину
    function cartOpen() {
        if (cart.totalSum > 0) {
            shoppingCartBanner.classList.add('d-none');
        }
        shoppingCart.classList.add('shopping-cart_active');
        document.body.style.overflow = 'hidden';
    }

    // Закрыть корзину
    function cartClose() {
        shoppingCart.classList.remove('shopping-cart_active');
        document.body.style.overflow = 'auto';
    }

    // Событие нажата кнопка окрыть карзину
    cartBtnOpen.forEach(btn => {
        btn.addEventListener('click', e => {
            cardProductClose();
            cartOpen();
        });
    });

    // Событие нажата кнопка закрыть корзину
    cartBtnClose.addEventListener('click', e => {
        cartClose();
    });

    // Событие нажата кнопка "Продолжить покупки"
    // в корзине с товаром
    continueShopping.addEventListener('click', e => {
        cartClose();
    });

    // Событие нажата кнопка "Выбрать товар"
    // (доступна когда корзина пуста)
    shoppingCartBtnBanner.addEventListener('click', e => {
        cartClose();
    });


    // Добавить товар в корзину
    document.addEventListener('click', e => {
        const btn = e.target;

        if (btn.classList.contains('js-add-to-cart')) {

            if (btn.classList.contains('btn__product-card_active')) {
                cardProductClose();
                cartOpen();

            } else {

                const id = btn.dataset.productid,
                      product = new Product(productSearch(id, productList));

                if (cart.search(product.id)) {
                    // увеличиваем количество товара в корзине
                    cart.increaseTheNumber(product.id);
                } else {
                    // Добавляем товар
                    cart.addToCart(product);
                    markItemInCart(product.id, 'btn__product-card_active');
                }

                // Выводим товар
                render('.shopping-cart__list', product.object(), tplProductCart);

                // Обновляем счетчик количества товара в корзине в шапке сайта
                updateCounterCart();

                // Обнавляем счетчики суммы товаров в корзине на панели управления
                updateSumCart();

                // Обнавляем счетчики суммы товаров в корзине
                updateSumOrder();

                // Обновляем счетчик количества товаров в корзине
                updateCounterProduct();

            }

        }

    });

    // Удалить товар из корзины
    const shoppingCartList = document.querySelector('.shopping-cart__list');

    shoppingCartList.addEventListener('click', e => {
        const btn = e.target;

        if (btn.classList.contains('js-remove-item-from-cart')) {
            const productID = btn.dataset.product;

            // Снимаем отметку о том, что товар в корзине
            markItemNotInCart(productID, 'btn__product-card_active');

            // Удаляем товар со страницы
            btn.parentNode.remove();

            // Удаляем товар из корзины
            cart.del(productID);

            if (cart.totalSum === 0) {
                shoppingCartBanner.classList.remove('d-none');
            }

            // Обновляем счетчик количества товара в корзине в шапке сайта
            updateCounterCart();

            // Обнавляем счетчики суммы товаров в корзине
            updateSumCart();

            // Обнавляем счетчики суммы товаров в корзине
            updateSumOrder();

            // Обновляем счетчик количества товаров в корзине
            updateCounterProduct();

        }
    });

    // Открытие/закрытие карточки товара
    const cardProductBtnClose = document.querySelector('.card-product .ctrlpanel__close'),  // Кнопка "закрыть карточку товара"
          cardProduct = document.querySelector('.card-product');                            // Карточка товара

    // Функция сначало наполняет карточку товара, а затем ее открвает
    function cardProductOpen(product) {
        // Выводим картинки товара
        for (const key in product.images()) {
            render('.card-product__images', product.images()[key], tplImg);
        }

        // Выводим спецификацию
        for (const key in product.spec()) {
            render('.card-product__spec', product.spec()[key], tplSpec);
        }

        // Выводим спецификацию
        render('.card-product__title', product.title, tplTitle);

        // Выводим ID товара
        render('.card-product__id', product.id, tplID);

        // Выводим стоимость товара
        render('.card-product__price', product.price, tplPrice);

        // Выводим кнопку купить
        render('.card-product__ctrl', product.id, tplBtnAddToCart);

        // Запускаем слайдер в нутри карточки товара
        sliderNew('card-product__images');

        // Ставим галочку в нутри кнопки если товар есть в корзине
        if (cart.search(product.id)) {
            markItemInCart(product.id, 'btn__product-card_active');
        }

        // Открываем карточку товара
        cardProduct.classList.add('card-product_active');
        document.body.style.overflow = 'hidden';
    }

    // Событие - открыть карточку товара из каталога
    catalog.addEventListener('click', e => {
        e.preventDefault();
        const event = e.target,
              title = event.classList.contains('product__title'),
              link = event.classList.contains('product__link'),
              id = event.dataset.productid;

        if (title || link) {
            const product = new Product(productSearch(id, productList));
            cardProductOpen(product);
        }

    });

    // Событие - открыть карточку товара из корзины
    shoppingCartList.addEventListener('click', e => {
        const event = e.target,
              title = event.classList.contains('shopping-cart__title'),
              id = event.dataset.productid;

        if (title) {
            console.log(event);
            const product = new Product(productSearch(id, productList));
            cartClose();
            cardProductOpen(product);
        }

    });

    // Закрыть карточку товара
    function cardProductClose() {
        cardProduct.classList.remove('card-product_active');

        // Очищаем карточку товара
        clear(['.card-product__images',
        '.card-product__spec',
        '.card-product__title',
        '.card-product__id',
        '.card-product__price',
        '.card-product__images',
        '.card-product__ctrl']);

        document.body.style.overflow = 'auto';
    }

    // Событие - закрыть карточку товара
    cardProductBtnClose.addEventListener('click', e => {
        cardProductClose();
    });

    // Изменяем количества товара

    // Обновляем значение счетчика суммы выбранных товаров на панелях управления
    function updateSumCart() {
        const cartSumCounter = document.querySelectorAll('.cart__sum');
        cartSumCounter.forEach(e => {
            const sum = String(cart.totalSum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
            update(e, sum);
        });
    }

    // Обновляем значение счетчика суммы выбранных товаров в корзине
    function updateSumOrder() {
        const cartSumCounter = document.querySelector('.order-summary__total'),
              sum = String(cart.totalSum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        update(cartSumCounter, sum);
    }

    // Обновляем счетчик количества товара в корзине
    function updateCounterProduct() {
        const cartItemsCounter = document.querySelector('.shopping-cart__items span');
        update(cartItemsCounter, cart.totalItems);
    }

    function updateCounterCart() {
        const carts = document.querySelectorAll('.cart .cart__counter');
        if (cart.totalItems > 0) {
            carts.forEach(e => {
                e.classList.add('cart__counter_active');
                update(e, cart.totalItems);
            });
        } else {
            carts.forEach(e => {
                e.classList.remove('cart__counter_active');
                update(e, cart.totalItems);
            });
        }

    }

    // Событие - увиличеть/уменьшить количество товара в корзине
    shoppingCartList.addEventListener('click', e => {
        const event = e.target,
              plus = event.classList.contains('js-shopping-cart__plus'),
              minus = event.classList.contains('js-shopping-cart__minus'),
              counter = event.parentNode.querySelector('.js-shopping-cart__counter'),
              btnMinus = event.parentNode.querySelector('.js-shopping-cart__minus');

        if (plus) {
            const id = event.dataset.plus,
                  product = new Product(productSearch(id, productList)),
                  sum = event.parentNode.parentNode.parentNode.querySelector('.js-shopping-cart__sum');

            btnMinus.classList.add('shopping-cart__minus_active');
            cart.increaseTheNumber(product.id);
            update(counter, cart.productList[product.id].quantity);
            update(sum, cart.productList[product.id].sum);
            // Обновляем счетчик количества товара в корзине в шапке сайта
            updateCounterCart();
            // Обнавляем счетчики суммы товаров в корзине
            updateSumCart();
            // Обнавляем счетчики суммы товаров в корзине
            updateSumOrder();
            // Обновляем счетчик количества товаров в корзине
            updateCounterProduct();

        } else if (minus) {
            const id = event.dataset.minus,
                  product = new Product(productSearch(id, productList)),
                  sum = event.parentNode.parentNode.parentNode.querySelector('.js-shopping-cart__sum');

            cart.reduceTheNumber(product.id);
            update(counter, cart.productList[product.id].quantity);
            update(sum, cart.productList[product.id].sum);
            // Обновляем счетчик количества товара в корзине в шапке сайта
            updateCounterCart();
            // Обнавляем счетчики суммы товаров в корзине
            updateSumCart();
            // Обнавляем счетчики суммы товаров в корзине
            updateSumOrder();
            // Обновляем счетчик количества товаров в корзине
            updateCounterProduct();

            if (counter.innerHTML === '1') {
                event.classList.remove('shopping-cart__minus_active');
            }
        }

    });

    // Заказа
    const openOrder = document.querySelector('.js-open-order'),
          order = document.querySelector('.order'),
          orderBtnClose = document.querySelector('.order .ctrlpanel__close');

    // Открыть карточку заказа
    openOrder.addEventListener('click', e => {
        const sum = document.querySelector('.order .order-summary__total'),
              items = document.querySelector('.order .order-summary__items'),
              totalSum = String(cart.totalSum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');


        update(sum, totalSum);
        update(items, cart.totalItems);
        order.classList.add('order_active');
    });

    // Закрыть карточку товара
    orderBtnClose.addEventListener('click', e => {
        const sum = document.querySelector('.order .order-summary__items');
        update(sum, '');
        order.classList.remove('order_active');
    });

    // Отправка заказа

    const orderBtn = order.querySelector('.order-summary_btn');

    orderBtn.addEventListener('click', e => {
        const userPhone = order.querySelector('input[name=phone]'),
              userName = order.querySelector('input[name=username]'),
              userEmail = order.querySelector('input[name=email]'),
              form = order.querySelector('.order__form'),
              validation = formValidation(form, ['input[name=phone]',
                                                 'input[name=username]',
                                                 'input[name=email]']);

        if (validation) {
            const order = new Order(cart, userPhone.value, userEmail.value, userName.value),
                  orderJSON = JSON.stringify(order);
            console.log(orderJSON);
        }

    });

});
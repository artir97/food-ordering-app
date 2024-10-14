
// desktop page elements
let totalPrice = document.getElementById('price-total');

// mobile page elements
let totalPriceMobile = document.getElementById('price-total-mobile');
let btnMobileCheckout = document.getElementById('mobile-checkout');
let btnMobileCheckoutBack = document.getElementById('mobile-checkout-back');

// similar page elements
let mainDishContainer = document.getElementById('main-dishes');
let ordersContainer = document.getElementById('orders-container');
let subtotal = document.getElementById('price-orders');
let deliveryFee = document.getElementById('price-delivery');
let freeDeliveryLimit = document.getElementById('free-delivery-limit');
let basketContainer = document.querySelector('.basket');
let foodContentContainer = document.querySelector('.food-content');

// global variables
let deliveryFeePrice = 5;
let basket = [];

function init() {
    load();
    renderMainDishes();
    renderOrders();
    renderDeliveryFee();
}

function renderMainDishes() {
    let content = ''
    for (let i = 0; i < mainDishes.length; i++) {
        content += dishCardTemplate(i);
    }
    mainDishContainer.innerHTML = content;
}

function addToBasket(i) {
    event.stopPropagation();
    let dishFound = false;

    for (let dish of basket) {
        if (dish.name === mainDishes[i].name) {
            dish.amount += 1;
            dishFound = true;
            break;
        }
    }

    if (!dishFound) {
        let newDish = { ...mainDishes[i], amount: 1 };
        basket.push(newDish);
    }
    renderOrders();
}


function renderOrders() {
    let content = '';
    for (let i = 0; i < basket.length; i++) {
        content += orderCardTemplate(i);
    }
    ordersContainer.innerHTML = content;
    calculateCheckout();
    save();
}

function deleteFromBasket(i) {
    basket[i].amount = 0;
    basket.splice(i, 1);
    renderOrders();
}

function addAmountInBasket(i) {
    basket[i].amount += 1;
    renderOrders();
}

function removeAmountInBasket(i) {
    basket[i].amount -= 1;
    if(basket[i].amount <= 0) {
        deleteFromBasket(i);
    }
    renderOrders();
}

function calculateCheckout() {
    let subtotalCheckout = 0;

    for (let i = 0; i < basket.length; i++) {
        subtotalCheckout += (basket[i].price * basket[i].amount);
    }

    if(subtotalCheckout >= 30) {
        deliveryFeePrice = 0;
        freeDeliveryLimit.classList.add('d-none');
        renderDeliveryFee();
    } else {
        deliveryFeePrice = 5;
        freeDeliveryLimit.classList.remove('d-none');
        renderDeliveryFee();
    }
    subtotal.innerHTML = subtotalCheckout.toFixed(2) + ' €';
    totalPrice.innerHTML = (subtotalCheckout + deliveryFeePrice).toFixed(2) + ' €';
    totalPriceMobile.innerHTML = (subtotalCheckout + deliveryFeePrice).toFixed(2) + ' €';
}

function renderDeliveryFee() {
    deliveryFee.innerHTML = deliveryFeePrice + ' €';
}

function save() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

function load() {
    let loadedBasket =  JSON.parse(localStorage.getItem("basket"));
    if(loadedBasket != null) {
        basket = loadedBasket;
    }
}

function showCheckoutMobile() {
    btnMobileCheckout.style.display = 'none';
    basketContainer.style.display = 'block';
    foodContentContainer.style.display = 'none';
    btnMobileCheckoutBack.style.display = 'flex';
}

function showDishes() {
    btnMobileCheckout.style.display = 'flex';
    basketContainer.style.display = 'none';
    foodContentContainer.style.display = 'block';
    btnMobileCheckoutBack.style.display = 'none';
}
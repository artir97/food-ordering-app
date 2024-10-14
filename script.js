let mainDishContainer = document.getElementById('main-dishes');
let ordersContainer = document.getElementById('orders-container');

/*checkout elements*/
let subtotal = document.getElementById('price-orders');
let deliveryFee = document.getElementById('price-delivery');
let totalPrice = document.getElementById('price-total');
let freeDeliveryLimit = document.getElementById('free-delivery-limit');

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
    if(!basket.includes(mainDishes[i])) {
        basket.push(mainDishes[i]);
    }
    let indexOfCurrentDish = basket.findIndex(dish => dish.name === mainDishes[i].name);
    basket[indexOfCurrentDish].amount += 1;
    renderOrders();
    save();
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
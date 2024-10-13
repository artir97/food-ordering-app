let mainDishContainer = document.getElementById('main-dishes');
let ordersContainer = document.getElementById('orders-container');

let basket = [];

function init() {
    renderMainDishes();
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
}

function renderOrders() {
    let content = '';
    for (let i = 0; i < basket.length; i++) {
        content += orderCardTemplate(i);
    }
    ordersContainer.innerHTML = content;
}
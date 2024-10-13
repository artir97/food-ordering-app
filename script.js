let mainDishContainer = document.getElementById('main-dishes');
let ordersContainer = document.getElementById('orders-container');

function init() {
    renderMainDishes();
    renderOrders();
}

function renderMainDishes() {
    let content = ''
    for (let i = 0; i < mainDishes.length; i++) {
        content += dishCardTemplate(i);
    }
    mainDishContainer.innerHTML = content;
}

function renderOrders() {
    let content = '';
    for (let i = 0; i < mainDishes.length ; i++) {
        content += orderCardTemplate();
    }
    ordersContainer.innerHTML = content;
}
let mainDishContainer = document.getElementById('main-dishes');

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

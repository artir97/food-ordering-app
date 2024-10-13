function dishCardTemplate(i) {
    return (
        `         
         <div class="dish-card">
            <div class="dish-card-data">
                <span class="dish-title">${mainDishes[i].name}</span>
                <span>${mainDishes[i].description}</span>
                <div class="dish-price">${mainDishes[i].price} €</div>
            </div>
            <div>
                <img src="./assets/icons/plus-icon.png" alt="a plus icon">
            </div>
         </div>
        `
    )
}

function orderCardTemplate() {
    return (
        `     
       <div class="order-template">
            <div>
                FOOD NAME
            </div>
            <div class="order-controls">
                <img src="./assets/icons/minus-icon.png" alt="minus icon">
                <div> 5x </div>
                <img src="./assets/icons/plus-icon.png" alt="plus icon">
                <div>25€</div>
                <img src="./assets/icons/trash-icon.png" alt="trash icon">
            </div>
        </div>
        `
    )
}
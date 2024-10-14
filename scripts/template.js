function dishCardTemplate(i) {
    return (
        `         
         <div onclick="addToBasket(${i})" class="dish-card">
            <div class="dish-card-data">
                <span class="dish-title">${mainDishes[i].name}</span>
                <span>${mainDishes[i].description}</span>
                <div class="dish-price">${mainDishes[i].price} €</div>
            </div>
            <div onclick="addToBasket(${i})">
                <img src="./assets/icons/plus-icon.png" alt="a plus icon">
            </div>
         </div>
        `
    )
}

function orderCardTemplate(i) {
    return (
        `     
       <div class="order-template">
            <div>
                ${basket[i].name}
            </div>
            <div class="order-controls">
                <img onclick="removeAmountInBasket(${i})" src="./assets/icons/minus-icon.png" alt="minus icon">
                <div>${basket[i].amount} X</div>
                <img onclick="addAmountInBasket(${i})" src="./assets/icons/plus-icon.png" alt="plus icon">
                <div>${(basket[i].price * basket[i].amount).toFixed(2)} €</div>
                <img onclick="deleteFromBasket(${i})" src="./assets/icons/trash-icon.png" alt="trash icon">
            </div>
        </div>
        `
    )
}
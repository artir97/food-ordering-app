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
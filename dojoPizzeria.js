
//DOJO Pizzeria

function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarealla"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "sliced tomato", ["mozzarella","provolone"], ["bacon", "hamburger", "pastrami"]);
var pizza4 = pizzaOven("new york", "alfredo", ["mozzarella","gouda"], ["skittles", "starburst", "milkduds"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

    

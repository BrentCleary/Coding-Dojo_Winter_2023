// Pizza Oven

function PizzaOven(crustType, sauceType, cheeses, toppings)
{
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizzaPie1 = PizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var pizzaPie2 = PizzaOven("hand tossed", "marinara", ["mozzarella",  "feta"], ["mushrooms", "olives", "onions"]);
var pizzaPie3 = PizzaOven("thin crust", "pesto", ["mozzarella",  "feta"], ["mushrooms", "chicken", "onions"]);
var pizzaPie4 = PizzaOven("stuffed crust", "fresh tomatoes", ["3 cheese"], ["eggplant", "artichoke"]);

console.log(pizzaPie1, pizzaPie2, pizzaPie3, pizzaPie4);


// Random Pizza Oven

crustTypeArr = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
sauceTypeArr = ["traditional", "marinara", "pesto", "fresh tomatoes"];
cheesesTypeArr = ["mozzarella", "feta", "3 cheese", "cheddar"];
toppingsTypeArr = ["pepperoni", "sausage", "mushrooms", "artichoke"];

function RandomPizzaOven(crustArr, sauceArr, cheesesArr, toppingsArr)
{
    var randomPizza = {};
    randomPizza.crustType = crustArr[Math.floor(Math.random() * crustArr.length)];
    randomPizza.sauceType = sauceArr[Math.floor(Math.random() * sauceArr.length)];
    randomPizza.cheeses = cheesesArr[Math.floor(Math.random() * cheesesArr.length)];
    randomPizza.toppings = toppingsArr[Math.floor(Math.random() * toppingsArr.length)];
    return randomPizza;
}

var OurRandomPizza = RandomPizzaOven(crustTypeArr, sauceTypeArr, cheesesTypeArr, toppingsTypeArr);
console.log(OurRandomPizza);
"use strict";
let hesh = {};  

function HashStorageFunc() { // класс 
    this.addValue = function (key, value) { // публичный метод 
        if (!(key in hesh)){
            hesh[key] = value;
        } 
    }
    this.getValue = function (key) {
        if (key in hesh) {
            return hesh[key];
        }
    }
    this.deleteValue = function (key) {
        if (key in hesh) {
            delete hesh[key];
            return true;
        } else {
            return false;
        }
    }
    this.getKeys = function () {
        return Object.keys(hesh);
    }
}

function LocStorage(obj){
    this.obj = obj;
    this.setLoc = function(){
        localStorage[this.obj] = JSON.stringify(hesh);
    }
    this.getLoc = function(){        
        if(localStorage[this.obj]!=null){
            hesh = JSON.parse(localStorage[this.obj]);
        }
    }
}

const drinkStorage = new HashStorageFunc();// создаем объект класса

const drinksLocStorage = new LocStorage("drinks");
const dishesLocStorage = new LocStorage("dishes");

function addDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        var alc = confirm('Напиток алкогольный?');
        var rec = prompt('Введите рецепт напитка');
        while (rec == "") {
            rec = prompt('Введите рецепт напитка');
        }
    }
    if (rec != null) {
        let alc_rec = {
            'Alcohol': (alc ? 'Да' : 'Нет'),
            'Reciepe': rec
        };
        drinksLocStorage.getLoc();
        drinkStorage.addValue(drink, alc_rec);// вызов метода addValue
        drinksLocStorage.setLoc();
    }
}

function getDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        drinksLocStorage.getLoc();
        let checkDrink = drinkStorage.getValue(drink);
        if (checkDrink) {
            alert(`
            напиток: ${drink}
            алкогольный: ${checkDrink["Alcohol"]}
            рецепт приготовления: ${checkDrink["Reciepe"]}`);
        } else {
            alert('Такого напитка не сущевствует')
        }
    }
}

function deleteDrink() {
    let drink = prompt('Введите напиток');
    while (drink == "") {
        drink = prompt('Введите напиток');
    }
    if (drink != null) {
        drinksLocStorage.getLoc();
        let checkDelete = drinkStorage.deleteValue(drink);
        if (checkDelete) {
            alert('Напиток удален');
            drinksLocStorage.setLoc();
        } else {
            alert('Такого напитка не существует')
        }
    }
}

function listOfDrink() {
    drinksLocStorage.getLoc();
    let arrayOfDrinks = drinkStorage.getKeys();
    if (arrayOfDrinks.length > 0) {
        alert(arrayOfDrinks);
    } else if (arrayOfDrinks.length == 0) {
        alert("Напитков нет");
    }
}






function addDish() {
    let dish = prompt('Введите блюдо');
    while (dish == "") {
        dish = prompt('Введите блюдо');
    }
    if (dish != null) {
        var rec = prompt('Введите рецепт блюда');
        while (rec == "") {
            rec = prompt('Введите рецепт блюда');
        }
    }
    if (rec != null) {
        let dish_rec = {
            'Reciepe': rec
        };
        dishesLocStorage.getLoc();
        drinkStorage.addValue(dish, dish_rec);// вызов метода addValue
        dishesLocStorage.setLoc();
    }
}

function getDish() {
    let dish = prompt('Введите блюдо');
    while (dish == "") {
        dish = prompt('Введите блюдо');
    }
    if (dish != null) {
        dishesLocStorage.getLoc();
        let checkDrink = drinkStorage.getValue(dish);
        if (checkDrink) {
            alert(`
            блюдо: ${dish}
            рецепт приготовления: ${checkDrink["Reciepe"]}`);
        } else {
            alert('Такого блюда не сущевствует');
        }
    }
}

function deleteDish() {
    let dish = prompt('Введите блюдо');
    while (dish == "") {
        dish = prompt('Введите блюдо');
    }
    if (dish != null) {
        dishesLocStorage.getLoc();
        let checkDelete = drinkStorage.deleteValue(dish);
        if (checkDelete) {
            alert('Блюдо удалено');
            dishesLocStorage.setLoc();
        } else {
            alert('Такого блюда не существует');
        }
    }
}

function listOfDish() {
    dishesLocStorage.getLoc();
    let arrayOfDrinks = drinkStorage.getKeys();
    if (arrayOfDrinks.length > 0) {
        alert(arrayOfDrinks);
    } else if (arrayOfDrinks.length == 0) {
        alert("Блюд нет");
    }
}
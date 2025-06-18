// Создание констант. Task 01
const goods = document.querySelector('.goods');
const square = document.querySelector('.square');
const layer = document.querySelector('.layer');
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');
const goodsImg = document.querySelector('.goods-img');

//Создание функции t01. Создание переменных expenditure, k, price. Все три переменные равны нулю. Task 04
function t01() {
    let expenditure = 0;
    let k = 0;
    let price = 0;

    //Добавление проверки на отрицательную площадь. Task 12
    if (square.value < 0) square.value = 1;

    //Добавление проверки на отрицательную толщину слоя. Task 13
    if (layer.value < 0) layer.value = 1;

    //Добавление проверки на толщину слоя больше 100мм.
    if (layer.value > 100) layer.value = 100;

    //Добавление проверки на пустую строку вводимую в square и layer. Если значение - пустая строка, то переменных равно 1 и присваиваится в input для площади и толщины слоя значение 1. Task 15
    if (square.value.trim() === '')square.value = 1;
    if (layer.value.trim() === '')layer.value = 1;
    
    //Написание switch case для первых двух товаров. Task 05
    const value = goods.value;
    switch (value) {
        case 'budmaster':
            //console.log('budmaster');
            k = 1.9;
            price = 157;
            break;
        case 'ceresit':
            //console.log('ceresit');
            k = 2;
            price = 136;
            break;
        //Добавление остальных товаров. Task 11
       case 'siltek':
            //console.log('siltek');
            k = 2;
            price = 151;
            break;
        case 'polimin':
             //console.log('polimin');
            k = 1;
            price = 110;
            break;         
    }

    //Добавление расчета расхода. Task 06
    expenditure = square.value * layer.value * k;

    //Выведите результат расчета расхода в кг на страницу в элемент .out-1. Task 07
    out1.textContent = `${expenditure}кг`;

    //Добавление вывода на страницу расхода в мешках. Task 9
    out2.textContent = Math.ceil(expenditure / 25) + ' ' + 'мешка / мешков';

    //Выведеybt стоимостb товара, умножив количество мешков на их price. Task 10
    out3.textContent =`${price * Math.ceil(expenditure / 25)} uah`;
}

// Написание функции t02, которая получает из select value текущего товара и заменяет изображение на изображение выбранного товара. Task 02
function t02() {
    const value = goods.value;
    //console.log(value);
    goodsImg.src = `./images/${value}.jpg`;

    //Добавление очистки элементов .out-1, .out-2, .out-3 . Task 08
    out1.textContent = '';
    out2.textContent = '';
    out3.textContent = '';
}

// Запуск функции t01 по событию click элемента button b-1.
document.querySelector('.b-1').onclick = t01;
// Добавление кода JS, запуск функции t02 по событию change элемента goods. Task 03
goods.onchange = t02;

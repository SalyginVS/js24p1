// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, получает ЧИСЛО из input.i-1 и если это число больше чем 1500 выводит в .out-1 единицу. 

function t01 () {
    let i1val = +(document.querySelector('.i-1').value);

    if (i1val > 1500) document.querySelector('.out-1').textContent = 1;
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// В предыдущем задании условие выполняется когда изменялся вывод. Если вывод не изменялся, то if не работал и состояние вывода не изменялось. Это не удобно. Давайте изменим задачу и сделаем "вилку", т.е. программа ОБЯЗАТЕЛЬНО пойдет или по одной, или по другой ветке. Если у вас вилка - применяем if else.
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, получает ЧИСЛО из input.i-2 и если это число больше чем 1500 выводит в .out-2 единицу, если меньше - нуль. 

function t02 () {
    let i2val = +(document.querySelector('.i-2').value);

    if (i2val > 1500) document.querySelector('.out-2').textContent = 1;
    else if (i2val < 1500) document.querySelector('.out-2').textContent = 0;
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// В некоторых случаях в задаче могут идти просто не связанных друг с другом условий.
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, получает ЧИСЛО из input.i-3 и если это число больше нуля выводит в .out-31 единицу, если меньше - нуль. Если число четное, то в .out-32 выводится строка 'even', если нечетное - 'odd'.

function t03 () {
    let i3val = +(document.querySelector('.i-3').value);

    if (i3val > 0) document.querySelector('.out-31').textContent = 1;
    if (i3val < 0) document.querySelector('.out-31').textContent = 0;

    if (i3val % 2 === 0) document.querySelector('.out-32').textContent = 'even';
    else document.querySelector('.out-32').textContent = 'odd';
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Функция всегда будет выводить в .out-4 строку 'Ян Павел ', потому, что условие в if всегда выполняется. Проверьте. Не забывайте, что условие внутри if всегда сводится к true, false. 

function t04 () {
    if (true) {
        document.querySelector('.out-4').textContent += 'Ян Павел ';
    }
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 в переменную, например num. Дальше напишите условие вида if (num) то выводим в .out-5 число 1, в противном случае число 0. Попробуйте запустить ваш код подставляя в input разные числа. Попробуйте отрицательные числа и обязательно нуль.

function t05 () {
    let num = +document.querySelector('.i-5').value;
    if (num) document.querySelector('.out-5').textContent = 1;
    else document.querySelector('.out-5').textContent = 0;
}

document.querySelector('.b-5').onclick = t05;

// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции, который читает строку из input.i-6 и если длина строки больше 10 символов то выводит в .out-6 true. Если меньше - false. Обратите внимание, данную задачу можно решить без операторов if...

function t06 () {
    let i6val = document.querySelector('.i-6').value;

    document.querySelector('.out-6').textContent = i6val.length > 10;
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Функция читает из input.i-71 и input.i-72 числа и выводит в .out-7 большее из двух этих чисел. Если числа равны, то выводится число из .i-71.

function t07 () {
    let i71val = +(document.querySelector('.i-71').value);
    let i72val = +(document.querySelector('.i-72').value);

    if (i71val > i72val) document.querySelector('.out-7').textContent = i71val;
    else if (i72val > i71val) document.querySelector('.out-7').textContent = i72val;
    else document.querySelector('.out-7').textContent = i71val;
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция читает год рождения из input.i-8 и если пользователю больше 16 лет, то выводит единицу в .out-8. Если пользователю меньше 16 лет, то выводит в .out-8 число -1. Если пользователю 16 лет, то выводит 0.

let currentYear = (new Date()).getFullYear();

function t08 () {
    const out = document.querySelector('.out-8');
    let i8val = +document.querySelector('.i-8').value;

    if ((currentYear - i8val) > 16) out.textContent = 1;
    else if ((currentYear - i8val) < 16) out.textContent = -1;
    else out.textContent = 0;
}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции, код читает номер квартиры из input.i-9. В доме три подъезда:
// первый квартиры от 1 до 36
// второй квартиры от 37 до 87
// третий от 88 до 110.
// все числа указаны включительно. Функция должна выводить в .out-9 номер подъезда в зависимости от введенной квартиры. Если число выходит из указанных диапазонов - то выводится 0.

function t09 () {
    const out = document.querySelector('.out-9');
    let i9val = +document.querySelector('.i-9').value;

    if (i9val >= 1 && i9val <= 36) out.textContent = 1;
    else if (i9val >= 37 && i9val <= 87) out.textContent = 2;
    else if (i9val >= 88 && i9val <= 100) out.textContent = 3;
    else out.textContent = 0;
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при изменении input.r-10. Если число от:
// 20 до 30 то в .out-10 выводится строка 'cold'
// 31 до 50 то в .out-10 выводится строка 'warm'
// 51 до 70 то в .out-10 выводится строка 'hot'


function t10 () {
    const out = document.querySelector('.out-10');
    let r10val = +document.querySelector('.r-10').value;

    if (r10val >= 20 && r10val <= 30) out.textContent = 'cold';
    else if (r10val >= 31 && r10val <= 50) out.textContent = 'warm';
    else if (r10val >= 51 && r10val <= 70) out.textContent = 'hot';
}

document.querySelector('.r-10').oninput = t10;


// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код внутри функции, который читает имя пользователя из .i-111 и пароль из .i-112. Если имя пользователя пустая строка, то в .out-11 выводится строка 'username error' и проверка дальше не делается. Если длина пароля меньше 10 символов, то в .out-11 выводится 'password error'. Если ошибок нет, то в .out-11 выводится true.

function t11 () {
    const out = document.querySelector('.out-11');
    let i111val = document.querySelector('.i-111').value;
    let i112val = document.querySelector('.i-112').value;

    if (i111val === '') {
        out.textContent = 'username error';
        return;
    }
    i112val.length < 10 ? out.textContent = 'password error' : out.textContent = 'true'
}

document.querySelector('.b-11').onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который выводит в .out-12 большее из двух чисел num_1 и num_2. Примените тернарный оператор. Случай равенства не рассматриваем.

let num_1 = 5;
let num_2 = 9;

function t12 () {
    num_1 > num_2 ? document.querySelector('.out-12').textContent = num_1 : document.querySelector('.out-12').textContent = num_2;
}

document.querySelector('.b-12').onclick = t12;


// Task 13
// Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который выводит в .out-13 отрицание переменной bool.

let bool = true;

function t13 () {
    document.querySelector('.out-13').textContent = !bool;
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Создана функция t14. Функция запускается при нажатии .b-14. Напишите код внутри функции, который проверяет, что если g14 не равна 2000 то выводит в .out-14 число 0. Если равна - число 1. Примените тернарный оператор.

let g14 = 2001;

function t14 () {
    g14 === 2000 ? document.querySelector('.out-14').textContent = 1 : document.querySelector('.out-14').textContent = 0;
}

document.querySelector('.b-14').onclick = t14;


// Тask 15
// При изменении select запускается функция t15. Список select содержит названия товаров. Если value товара кодируется true, то товар продается по скидке. Напишите внутри функции код, который получает value текущего товара и если предусмотрена скидка - выводит в .out-15 строку 'sale'. Если скидка не предусмотрена - выводится пустая строка.

function t15() {
    let s15val = document.querySelector('.s-15').value;

    s15val === 'true' ? document.querySelector('.out-15').textContent = 'sale' : document.querySelector('.out-15').textContent = '';
}

document.querySelector('.s-15').onchange = t15;


// Task 16
// Создана функция t16. Функция запускается при вводе в input.i-16 текста. Функция должна выводить вводимый в input текст в .out-16. Если длина текста меньше 5 символов, то .out-16 должен окрашиваться (backgroundColor) в цвет 'red'. Если длина текста от 5 (включительно) до 10 (включительно), то цвет фона - 'orange'. Если длина текста больше 10 символов, то цвет фона 'green'. 

function t16 () {
    const out16 = document.querySelector('.out-16');
    let i16val = document.querySelector('.i-16').value;

    out16.textContent = i16val;
    if (i16val.length < 5) out16.style.backgroundColor = 'red';
    else if (i16val.length >= 5 && i16val.length <= 10) out16.style.backgroundColor = 'orange';
    else out16.style.backgroundColor = 'green';
}

document.querySelector('.i-16').oninput = t16;

// Task 17
// Создана функция t17. Функция запускается при нажатии .b-17. Функция сравнивает значение из переменной url и если:
// url равно '/' то в .out-17 выводится строка 'frontend'
// url равно '/admin' то в .out-17 выводится строка 'backend'
// в остальных случаях в .out-17 выводится строка 'site'
// примените switch case.

let url ='/admin';

function t17 () {
    const out = document.querySelector('.out-17');

    switch (url) {
    case '/':
        out.textContent = 'frontend';
        break;

    case '/admin':
        out.textContent = 'backend';
        break;

    default:
        out.textContent = 'site';
    }
}

document.querySelector('.b-17').onclick = t17;


// Task 18
// Создана функция t18. Функция запускается при нажатии кнопки .b-18. Функция считывает value из select.s-18 и если:
// value = 1 выводит в .out-18 строку 'admin'
// value = 2 выводит в .out-18 строку 'moderator'
// value = 3 выводит в .out-18 строку 'user'
// применяйте switch case

function t18 () {
    const out = document.querySelector('.out-18');
    let s18val = document.querySelector('.s-18').value;

    switch (s18val) {
    case '1':
        out.textContent = 'admin';
        break;

    case '2':
        out.textContent = 'moderator';
        break;

    case '3':
        out.textContent = 'user';
        break; 
    }
}

document.querySelector('.b-18').onclick = t18;

// Task 19
// Создана функция t19. Функция запускается при клике на кнопку .b-19. Если .ch-19 является выбранным (checked), то выведите в .out-19 число 1. Если не выбран - число 0.


function t19() {
    document.querySelector('.ch-19').checked ? document.querySelector('.out-19').textContent = 1 : document.querySelector('.out-19').textContent = 0;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создана функция t20. Функция запускается при изменении состояния .ch-20. Если .ch-20 является выбранным, то в .out-20 выводите value данного input[type="checkbox"]. Если не выбран - выводите нуль.

function t20() {
    const ch20 = document.querySelector('.ch-20');
    const out = document.querySelector('.out-20');

    ch20.checked ? out.textContent = ch20.value : out.textContent = 0;
}

document.querySelector('.ch-20').oninput = t20;
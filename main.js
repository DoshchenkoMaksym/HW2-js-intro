console.log('------------- # 4');
let a = 1;
let b = 2;


let sum = a + b;
console.log(sum + ' - сумирование');
let min = b - a;
console.log(min + ' - вычитание');
let mult = a * b;
console.log(min + ' - умножение');
let division = a / b;
console.log(min + ' - деление');


console.log('------------- # 5');
for (let i = 1; i <= 5; i++) {
    console.log(i);
};

console.log('------------- # 6');
for (let i = 5; i >= 1; i--) {
    console.log(i);
};

console.log('------------- # 7');
function getMarkInfo(condition) {
    if (condition >= 10) {
        console.log('У вас максимальный бал'); 
    } else {
        console.log('У вас средний бал');
    };
     
}; 
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- # 8');
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
            break;
    };
};
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)

console.log('------------- # 9');

let array = ['a', 'b', 'c'];

/* array.push(1);
array.push(2);
array.push(3); */
for (i = 1; i <= 3; i++) {
    array.push(i);
};

console.log(array);

console.log('------------- # 10');

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let lastArray = firstArray.concat(secondArray);

console.log(lastArray);

console.log('------------- # 11');
console.log('Use function - calculate(enter number here) ')
function calculate(guess) {
    let answer = 0;
    let isInteger = Number.isInteger(guess);
    if (guess < 0 || isInteger === false) {
        console.log('Нужно вводить только положительное и целое число');
    }  else {
        for (i = 1; i <= guess; i++) {
            answer += i;
        }
        return console.log(answer);
    };
};
// Домашне завдання № 4 заняття 5
// Вправа № 1
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("");

// Вправа № 2

function palindrome() {
    let result = prompt("Введіть значчення (число)");
    let stringArr = result.split("").reverse().join("");

    if (result == stringArr) {
        console.log(`Дане значення: ${result} - є палідромом`);
    } else {
        console.log(`Дане значення: ${result} - не є паліндромом`);
    }
}
palindrome();

// Вправа № 3

function findGCD(a, b){
    if ((typeof a !== 'number') || (typeof b !== 'number')) 
      return false;
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  
  console.log(findGCD(11, 14));
  console.log(findGCD(8, 4));
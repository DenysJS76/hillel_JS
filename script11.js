// Домашне завдання № 10 заняття 11
// Вправа № 1

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Приклад використання:
  const n = 10; // Обчислення 10-го числа Фібоначчі
  console.log(`Число Фібоначчі на позиції ${n}: ${fibonacci(n)}`);

 // Вправа № 2
 
 function isPalindrome(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    return number === reversed;
  }
  
  function createPalindrome(startNumber) {
    let steps = 0;
    let currentNumber = startNumber;
  
    while (!isPalindrome(currentNumber)) {
      const reversed = parseInt(currentNumber.toString().split('').reverse().join(''));
      currentNumber += reversed;
      steps++;
      if (steps >= 1000) {
        return { result: `Дане знеачення не є паліндромом. Значення, що було введено: ${number}`, steps };
      }
    }
  
    return { result: currentNumber, steps };
  }
  
  // Приклад використання:
  const number = 196;
  const result = createPalindrome(number);
  
  console.log(`Паліндром: ${result.result}`);
  console.log(`Кількість кроків: ${result.steps}`);
  

  // Вправа № 3

  function permuteUnique(nums) {
    const result = [];
  
    function backtrack(current, remaining) {
      if (remaining.length === 0) {
        result.push(current.slice());
        return;
      }
  
      const uniqueSet = new Set();
      for (let i = 0; i < remaining.length; i++) {
        if (!uniqueSet.has(remaining[i])) {
          uniqueSet.add(remaining[i]);
          current.push(remaining[i]);
          const temp = remaining.splice(i, 1)[0];
          backtrack(current, remaining);
          current.pop();
          remaining.splice(i, 0, temp);
        }
      }
    }
  
    backtrack([], nums);
    return result;
  }
  
  // Приклад використання:
  const inputArray = [1, 2, 3];
  const permutations = permuteUnique(inputArray);
  
  console.log(permutations);
  
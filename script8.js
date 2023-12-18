// Домашне завдання № 8 заняття 8
// Вправа № 1

function createAdder(num) {
    return function(arg) {
      if (arg === undefined) {
        arg = 1;
      }
      return arg + num;
    };
  }
  
const addFive = createAdder(5);
console.log('Відповідь на завдання № 1 за умовою коли num = 3, результат:', addFive(3));
console.log('Відповідь на завдання № 1 за умовою коли аргумент не передано, результат:', addFive());

// Вправа № 2

function createCounter(startValue, stepValue) {
    let counter = startValue || 0;
    const step = stepValue || 1;
  
    function increment() {
      counter += step;
      return counter;
    }
  
    function decrement() {
      counter -= step;
      return counter;
    }
  
    function reset() {
      counter = startValue;
      return counter;
    }
  
    return {
      increment,
      decrement,
      reset
    };
  }
  
 
  const counter = createCounter(0, 2);
  
  console.log('Відповідь на завдання № 2 за умовою лічильника increment', counter.increment()); // Вывод: 2 (0 + 2 = 2)
  console.log('Відповідь на завдання № 2 за умовою лічильника increment', counter.increment()); // Вывод: 4 (2 + 2 = 4)
  
  console.log('Відповідь на завдання № 2 за умовою лічильника decrement', counter.decrement()); // Вывод: 2 (4 - 2 = 2)
  
  console.log('Відповідь на завдання № 2 за умовою лічильника reset', counter.reset());     // Вывод: 0 (сброс до начального значения)
  console.log('Відповідь на завдання № 2 за умовою лічильника increment', counter.increment()); // Вывод: 2 (0 + 2 = 2)
  
  // Вправа № 3
  
  function chainFunctions(...functions) {
    return function (...args) {
      let result;
      for (const func of functions) {
        if (!result) {
          result = func(...args);
        } else {
          result = func(result);
        }
      }
      return result;
    };
  }
  
  // Пример использования
  function addTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  function subtractTen(x) {
    return x - 10;
  }
  
  const chainedFunction = chainFunctions(addTwo, multiplyByThree, subtractTen);
  
  const finalResult = chainedFunction(5);
  console.log('Відповідь на завдання № 3:', finalResult); 
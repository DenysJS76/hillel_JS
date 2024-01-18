
// Домашне завдання № 12 заняття 13
// Вправа № 1

function delayPrint(char, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(char);
        resolve();
      }, delay);
    });
  }
  
  async function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const delay = Math.random() * 1000;
      await delayPrint(char, delay);
    }
  }
  
  // Пример вызова функции с рядком "Hello"
  randomDelayPrint("Hello")
    .then(() => {
      console.log("Всі букви виведено з задержкою");
    });
  
// Вправа № 2

function debounce(callback, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }
  
  // Приклад використання:
  
  // Оригінальна функція, яку ми хочемо дебаунсити
  function myFunction() {
    console.log("Функція викликана!");
  }
  
  // Створюємо дебаунс-функцію з затримкою в 1000 мілісекунд (1 секунда)
  const debouncedFunction = debounce(myFunction, 1000);
  
  // Викликаємо дебаунс-функцію декілька разів швидко
  debouncedFunction(); // Функція не викликається
  debouncedFunction(); // Функція не викликається
  
  // Чекаємо 1 секунду після останнього виклику та викликаємо оригінальну функцію
  // Повідомлення "Функція викликана!" буде виведено тільки один раз
  setTimeout(() => {
    debouncedFunction(); // Функція викликається
  }, 1000);

  const expensiveOperation = () => console.log("Виконую складну операцію..."); 
  const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
// Через 1 секунду після останнього виклику "Виконую складну операцію..." має бути виведене в консоль тільки один раз.

// Вправа № 3

    async function intervalRace(functions, t) {
        const results = [];
      
        async function executeFunction(fn) {
          return new Promise((resolve) => {
            setTimeout(async () => {
              const result = await fn();
              results.push(result);
              resolve();
            }, t);
          });
        }
      
        const executionPromises = functions.map((fn) => executeFunction(fn));
      
        await Promise.all(executionPromises);
      
        return results;
      }
      
      // Приклад використання:
      
      async function exampleFunction1() {
        console.log("Function 1 executed");
        return 1;
      }
      
      async function exampleFunction2() {
        console.log("Function 2 executed");
        return 2;
      }
      
      async function exampleFunction3() {
        console.log("Function 3 executed");
        return 3;
      }
      
      const functionsArray = [exampleFunction1, exampleFunction2, exampleFunction3];
      
      intervalRace(functionsArray, 1000)
        .then((results) => {
          console.log("All functions executed:", results);
        });
      

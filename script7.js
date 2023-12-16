// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість 
//логувати всі аргументи, передані у функцію-аргумент.
// 1. decoratedFunc(1, 2, "test"); закидываем функцию в декоратор и
//в консоли я должен увидеть столько аргументов, сколько я передам в эту функцию

// Домашне завдання № 7 заняття 7
// Вправа № 1


function logArguments(func) {
    return function (...args) {
     console.log('Аргументы функции:', args); 
      return func(...args);
    };
  }
  
  function exampleFunction(a, b, c) {
    console.log('Виконання функції з наступними аргументами:', a, b, c);  
  }
  
  
  const decoratedFunction = logArguments(exampleFunction);
  
  decoratedFunction(1, 2, "test");
  

// Домашне завдання № 7 заняття 7
// Вправа № 2
//validate
//Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти
// аргументи, передані у функцію fn, на відповідність заданому validator. Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
//decoratedFunc(1, 2, "test");
//закидываем все аргументы функции в валидатор (ограничения придумайте сами) и
//либо проверяем все агрументы функции на каком-то вымышленном валидаторе, либо возвращаем ошибку *именно ошибку, а не просто надпись в консоль*

function validate(fn, validator) {
    return function (...args) {
      if (validator(...args)) {
        return fn(...args);
      } else {
        console.error('Помилка валідації аргументів - де-які аргументи не є числами');
        // Можно выбросить ошибку или выполнить другое действие при неверных аргументах
        // throw new Error('Ошибка валидации аргументов');
      }
    };
  }
  
  // Пример валидатора, который проверяет, что все аргументы - числа
  function areArgsNumbers(...args) {
    return args.every(arg => typeof arg === 'number');
  }
  
  // Функция, которую мы хотим декорировать с помощью валидации
  function sum(a, b, c) {
    return a + b + c;
  }
  
  // Декорируем функцию sum с использованием валидатора areArgsNumbers
  const validatedSum = validate(sum, areArgsNumbers);
  
  // Вызываем декорированную функцию с валидными и невалидными аргументами
  console.log(validatedSum(2, 3, 4)); // Работает, так как оба аргумента - числа
  console.log(validatedSum(1, 2, "test")); // Ошибка валидации аргументов
  




// Домашне завдання № 7 заняття 7
// Вправа № 3
//retry
//Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію і додає можливість викликати 
//функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.
//retriedFunc= retry(exampFunc, 10)
//вызываем функцию заданное кол-во раз, если на каком-то вызове она отвалилась - ошибку на каком по счету (опционально)
//в консоли я должен увидеть резльтат последнего вызова, либо ошибку

function retry(func, maxAttempts) {

    return function (...args) {

        for (let i = 0; i < maxAttempts; i++) {

            const result = func(...args);

            if (result < 0.8) {
                console.log("Result", result);
            } else {
                throw new Error(`Max attempts exceeded. Result: ${result}`);
            }

        }
    };
}

function fn() {
    // Will return number between 0 and 1
    return Math.random()
}


const enhancedFunctionWithValidator = retry(fn, 4);

enhancedFunctionWithValidator(1, 2, "test");
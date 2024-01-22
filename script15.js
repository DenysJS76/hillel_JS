// Домашка № 14 "ГЕНЕРАТОР"
// Вправа № 1

function* fibonacci(n) {
    let a = 0, b = 1;
  
    while (a <= n) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  // Приклад використання:
  const n = 15; // Задана межа
  const generator = fibonacci(n);
  console.log('Вправа № 1. Результат наведено нижче.');
  // Виведення чисел Фібоначчі до заданої межі
  for (const value of generator) {
    console.log(value);
  
    // Ви можете додатково використовувати це число, якщо потрібно
    // Наприклад, виводити його у вашому коді або використовувати для інших обчислень
  }
  

  // Вправа № 2

  function flattenArray(arr) {
    const flattened = [];
  
    function flattenRecursive(item) {
      for (const value of item) {
        if (Array.isArray(value)) {
          flattenRecursive(value);
        } else {
          flattened.push(value);
        }
      }
    }
  
    flattenRecursive(arr);
    return flattened;
  }
  console.log('Вправа № 2. Результат наведено нижче.');
  // Приклад використання:
  const nestedArray = [1, [2, 3], [4, 5, [6, 7]]];
  
  const flattenedArray = flattenArray(nestedArray);
  console.log([...flattenedArray]);
  
  

  // Вправа № 3

  async function* asyncGenerator(promises) {
    // Ітеруємося по масиву промісів
    for (const promise of promises) {
      try {
        // Очікуємо виконання промісу і повертаємо результат
        yield await promise;
      } catch (error) {
        // Якщо проміс завершується з помилкою, повертаємо об'єкт з помилкою
        yield { error };
      }
    }
  }
  console.log('Вправа № 3. Результат наведено нижче.');
  // Приклад використання
  const promises = [
    new Promise((resolve) => setTimeout(() => resolve('Перший проміс'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject('Другий проміс'), 500)),
    new Promise((resolve) => setTimeout(() => resolve('Третій проміс'), 1500)),
  ];
  
  (async () => {
    // Створюємо ітератор для генератора
    const generat = asyncGenerator(promises);
  
    // Ітеруємося по результатам виконання промісів
    for await (const result of generat) {
      if (result.error) {
        console.error(`Помилка в промісі:`, result.error);
      } else {
        console.log('Результат промісу:', result);
      }
    }
  })();
  
  
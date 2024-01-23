  //Домашка 
  // Вправа № 2

  function* flatten(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            yield* flatten(item);
        } else {
            yield item;
        }
    }
}
  
  console.log('Вправа № 2. Результат наведено нижче.');
  // Приклад використання:
  const nestedArray = [1, [2, 3], [4, 5, [6, 7]]];
  
  const flattenedArray = flatten(nestedArray);
  console.log([...flattenedArray]);

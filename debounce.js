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
// Створюємо дебаунс-функцію
const debouncedFunction = debounce(myFunction, 1000); // 1000 мілісекунд (1 секунда)

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

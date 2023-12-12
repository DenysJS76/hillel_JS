// Домашне завдання № 5 заняття 5-6
// Вправа № 1

const originalArray = [1, 2, 3, 4, 5]; 
const reversedArray = originalArray.reverse();


console.log(reversedArray);


// Вправа № 2

const array1 = [1, 2, 3, 4, 5]; 
const array2 = [3, 4, 5, 6, 7]; 
const arrayValue = [...array1, ...array2]

const uniqueValuesArray = Array.from(new Set(arrayValue));

console.log(uniqueValuesArray);

// Вправа № 3

const students = [
    { name: 'Alice', age: 20, grade: 4.5 },
    { name: 'Bob', age: 21, grade: 3.9 },
    { name: 'Charlie', age: 19, grade: 4.8 },
];

const calculateAverageGrade = (studentArgument) => {
    
    const avgV2 = studentArgument.reduce((a, b) => a + b.grade, 0);
    
    const average = avgV2 / studentArgument.length;

    return Math.round(average * 100) / 100;
};

console.log(calculateAverageGrade(students));

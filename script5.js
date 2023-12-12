// Домашне завдання № 5 заняття 5-6
// Вправа № 1

const originalArray = [1, 2, 3, 4, 5]; 
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  const valueAtIndex = originalArray[i]
  
  reversedArray.push(valueAtIndex)
}
console.log(reversedArray);

// Вправа № 2


function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

const array1 = [1, 2, 3, 4, 5]; 
const array2 = [3, 4, 5, 6, 7]; 

const uniqueValuesArray = arrayUnique(array1.concat(array2));

console.log(uniqueValuesArray);

// Вправа № 3

const students = [
    { name: 'Alice', age: 20, grade: 4.5 },
    { name: 'Bob', age: 21, grade: 3.9 },
    { name: 'Charlie', age: 19, grade: 4.8 },
];

const calculateAverageGrade = (studentArgument) => {
    let result = 0;

   
    studentArgument.forEach((student) => {
        result += student.grade;
    });


    // среднее значение
    const average = result / studentArgument.length;

    // Округление значения 4.3999999999999995
    return Math.round(average * 100) / 100;
};

console.log(calculateAverageGrade(students));

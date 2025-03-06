// Virat Sharma
// ITMD 541-01 Graduate Student

// Exercise 1: minMaxAverage
function minMaxAverage(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;
    console.log(`Total Numbers: ${numbers.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Modified Test cases for Exercise 1
minMaxAverage([18, 24, 35, 7, 14, 22]);
minMaxAverage([99, 100, 101, 102, 98, 103]);
minMaxAverage([10, 20, 30, 40, 50]);

// Exercise 2: countVowels
function countVowels(word) {
    let vowels = word.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    console.log(`${word}: ${count} vowels`);
}

// Modified Test cases for Exercise 2
countVowels("Abstract");
countVowels("Sequence");
countVowels("Rhythm"); // Example with no vowels

// Exercise 3: sortNumbers
function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: ${numbers} -> Sorted Array: ${sortedArray}`);
}

// Modified Test cases for Exercise 3
sortNumbers([22, 15, 88, 2, 9]);
sortNumbers([5, 4, 3, 2, 1]); // Descending to Ascending
sortNumbers([45, 34, 23, 12, 1]);

// Exercise 4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    let celsiusNum = parseFloat(celsius);
    let fahrenheit = (celsiusNum * 9/5) + 32;
    console.log(`${celsiusNum.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Modified Test cases for Exercise 4
celsiusToFahrenheit(100);
celsiusToFahrenheit(-40);
celsiusToFahrenheit(16);
celsiusToFahrenheit("20.5");

// Exercise 5: Sorting people by age and introducing them
function sortPeopleByAge(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} years old from ${person.city}`);
    console.log(introductions);
}

// Modified Test cases for Exercise 5
let peopleArray = [
    { name: 'Zara', age: 19, city: 'Toronto' },
    { name: 'Liam', age: 21, city: 'Vancouver' },
    { name: 'Noah', age: 18, city: 'Montreal' },
    { name: 'Emma', age: 23, city: 'Calgary' },
    { name: 'Olivia', age: 25, city: 'Edmonton' }
];
sortPeopleByAge(peopleArray);

let anotherPeopleArray = [
    { name: 'Sophia', age: 26, city: 'Philadelphia' },
    { name: 'Ethan', age: 31, city: 'New Orleans' },
    { name: 'James', age: 29, city: 'Memphis' },
    { name: 'Lucas', age: 27, city: 'Baltimore' },
    { name: 'Mia', age: 30, city: 'Albuquerque' }
];
sortPeopleByAge(anotherPeopleArray);

let thirdPeopleArray = [
    { name: 'Harper', age: 22, city: 'Sacramento' },
    { name: 'Evelyn', age: 24, city: 'Tucson' },
    { name: 'Mason', age: 26, city: 'Fresno' },
    { name: 'Logan', age: 20, city: 'Mesa' },
    { name: 'Ella', age: 18, city: 'Kansas City' }
];
sortPeopleByAge(thirdPeopleArray);

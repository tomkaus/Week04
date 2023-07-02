/*I created an array. to find the last element of an array name[name.length - 1] 
to find the first element its name[0] */

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1]-ages[0]);


/*to add an element to the end of the array use name.push(element)*/

ages.push(37);
console.log(ages[ages.length-1]-ages[0]);

/* to find the sum of the elements in an array create a for loop that takes each element and adds it to the sum.
The for loop starts at 0 (index 0) and ends on the last element (< the length)*/

let sum = 0
for (let counter = 0; counter < ages.length; counter ++){
  sum += ages[counter]; 
}
console.log(sum)                     // prints the sum
console.log(ages.length)             // prints the number of numbers

console.log(sum/ages.length)         // divides the 2 to get the average


/*
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let sumNameLength = 0
for (let i = 0; i < names.length; i++){           // The for loop goes for index 0 to the last element
  sumNameLength += names[i].length                // at each element it finds the length and adds it to the sum
}

console.log(sumNameLength / (names.length))       // here we divide to find the average
console.log(names.join(' '))                      // The names.join concatenates them and ('') adds a space.

/*
How do you access the last element of any array?
*/
console.log(names[names.length - 1])              // always subtract 1 from the length since the index starts at 0
/*
How do you access the first element of any array?
*/
console.log(names[0])

/*
Create a new array called nameLengths. Write a loop to iterate over the previously created names array
 and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/
let nameLengths = []                                        // created an array
for (iterate = 0; iterate < names.length; iterate++){       // The for loop will pass through each element
   nameLengths.push(names[iterate].length)                  // the .push puts the .length of the element into the array created
}
console.log(nameLengths)                                    // prints the array with the lengths of each element
/*
Write a loop to iterate over the nameLengths array and calculate the sum of all
 the elements in the array.
*/
sumNameLengthsArray = 0                                     //create a variable that will add all the numbers
for (iter = 0; iter < nameLengths.length; iter++)         // the for loop will go through the array and add each
  {sumNameLengthsArray += nameLengths[iter]}
console.log(sumNameLengthsArray)

/*
Write a function that takes two parameters, word and n, as arguments and returns 
the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, 
I would expect the function to return 'HelloHelloHello').
*/
function wordRepeater(word, numberTimes) {                              // Function takes in a word and number
  if (typeof word !== 'string' || typeof numberTimes !== 'number' || numberTimes <= 0) {  // checks each to make sure
    return 'Invalid input. Please provide a string and a whole number.';                  // prints statement if not valid
  }
  let concatenatedWord = '';                                    // create a new variable that will be the printout
  for (let times = 0; times < numberTimes; times++) {        // the for loop will run the number of times
    concatenatedWord += word;                                 // concating the word each time
  }
  return console.log(concatenatedWord);                   // prints the concatened word a numberTimes with no space
}

wordRepeater('Wazzup',7)                                // calls function to print Wazzup 7 times


/*
Write a function that takes two parameters, firstName and lastName, and returns 
a full name. The full name should be the first and the last name separated by a space.
*/

function yourFullName(firstName, lastName) {          // simple function takes in 2 names
    console.log(firstName + ' ' + lastName)}        // prints out the concated 2 words with a space in between

    yourFullName('Johnny', 'Depp');


/*
Write a function that takes an array of numbers and returns true if the sum of all
the numbers in the array is greater than 100.
*/


function isSumGreaterThan100(values){             // create a function with parameter values (an array)
  let total = 0;
  for (let count=0;count<values.length;count++)    //for loop to pass through each element in the array
{
  total += values[count];                         //totals the value of each element
}
return total > 100                                // checks to see if the total is > 100 and returns TRUE or FALSE
}
let values = [100.000000000111]                 // the input array
let results = isSumGreaterThan100(values)       // assigns the result of calling the function to variable: results
console.log(results)

/*
Write a function that takes an array of numbers and returns the average of all
 the elements in the array.
*/
function calculateArrayAverage(numbersInArray) {        // create  funcion parameter is an array
  if (numbersInArray.length === 0) {                    // checks to ee if it contains numbers
    return 0;                                           // if none then returns zero
  }
  
  let sum = 0;                                           // if array has numbers lets add then and set = to sum
  for (let i = 0; i < numbersInArray.length; i++) {       // for loop takes each element
    sum += numbersInArray[i];                             // adds each element to sum
  }
  
  return sum / numbersInArray.length;                   // returns the average of the numbers in the array
}

const numbersInArray = [10, 20, -30, 40, -40]; // Example array
const average = calculateArrayAverage(numbersInArray);
console.log(average); // Output: 30
/*
Write a function that takes two arrays of numbers and returns true
if the average of the elements in the first array is greater than the 
average of the elements in the second array.
*/

function isAverageGreaterThan(arr1, arr2) {        // the function is called with 2 parameters (arrays of numbers)
  const average1 = calculateAverage(arr1);        // then another function is called that will find the ave of each
  const average2 = calculateAverage(arr2);        // assigns variables to the average of each

  return average1 > average2;                     // compares and returns True or False
}

function calculateAverage(numbers) {              // this is the function called to find the averages
  if (numbers.length === 0) {                     // first we could check to make sure there are numbers in the array
    return 0;                                     
  }

  let sum = 0;                                    //initializes sum = 0
  for (let i = 0; i < numbers.length; i++) {        // the for loop adds the numbers
    sum += numbers[i];          
  }

  return sum / numbers.length;                      // returns the average
}

const array1 = [10, 20, 30, 40, 50];                  // First array
const array2 = [5, 15, 25, 35, 45];                   // Second array
const result = isAverageGreaterThan(array1, array2);   // calls the first function
console.log(result);                                    // Output: true




/*
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
function willBuyDrink(isHotOutside, moneyInPocket) {            // function takes in 2 parameters
  if (isHotOutside && moneyInPocket > 10.50) {                 // checks to see if it is Hot and have more money
    return true;                                                // returns true if both are true
  } else {
    return false;
  }
}

const isHot = true;                                         // set ishot to be true
const money = 15.75;                                        // set money to be more than 10.50
console.log(willBuyDrink(isHot, money));                    // should return TRUE since both are TRUE


/*
Create a function of your own that solves a problem. In comments, write what the function 
does and why you created it.
*/
/* Given a positive number list all the factors of it:*/



function printFactors(number) {                         //this function takes in 1 parameter
  if (number <= 0) {                                    //checks to see if its a positive integer
    console.log("Number should be positive.");
    return;
  }

  console.log("Factors of", number + ":");

  for (let i = 1; i <= number; i++) {                    // for loop from 1 to the number
    if (number % i === 0) {                              // checks by mod to see if its divisble hence a factor
      console.log(i);                                   // prints the number if its a factor
    }
  }
}
const number = 34;                                      // initial number
printFactors(number);                                   // calls the function


// the above function printed as it went, number below each time.
// I wanted all the numbers in the same row 
// so created an array using the .push to push all factors into the array

function getFactors(numbs) {                          // function called with 1 prameter
  if (numbs <= 0) {                                   // check to make sure its a positive integer
    console.log("Number should be positive.");
    return [];
  }

  const factors = [];

  for (let i = 1; i <= numbs; i++) {                    // for loop from 1 to the number
    if (numbs % i === 0) {                            // checks by mod if remainder is 0 then a factor
      factors.push(i);                                 // if its a factor it pushes that number into the array
    }
  }

  return factors;                                       // returns all the factors
}

const numbs = 100;                                    // initial number
const factors = getFactors(numbs);                    // calls the function with the number
console.log(factors);                                 // prints the array





function printFactors(data) {
  if (data <= 0) {
    console.log("Number should be positive.");
    return;
  }

  const factors = [];
  const sqrt = Math.sqrt(data);                       // square root the data (given number)

  for (let i = 1; i <= sqrt; i++) {                   // Use the squareroot as last number in for loop
    if (data % i === 0) {                             // determine if its a factor
      factors.push(i);                                // push the factor
      if (i !== sqrt) {                               // if the factor is the sqrt then end 
        factors.push(data / i);                       //otherwise push its factor pair
      }
    }
  }

  factors.sort((a, b) => a - b);                      // sort the factors lowest to highest

  console.log("Factors of", data + ":", factors.join(", "));
}

const data = 360;
printFactors(data);













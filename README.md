# JavaScript_Learning

# Loops and iteration
1. While Loop
2. For in 
3. Switch Case
4. For each

## WHILE LOOP

Syntax: 

while (condition){
    statements
}

Here, if the condition is true the statements are executed. 
condition-check + statement-execution + condition-check = one complete iteration;
So, unless the conditions are true the statements inside the loop are executed, if not following statements to the loop get executed.
Avoid inifite loop like this example below:

while(true){
    statements
}

## FOR IN 

Syntax:

for (varible in object){
    statement
}

It is used to name a key or element or variable in an object.

for example:

let alien = {
    Name: 'Vishwesh',
    age: 23,
    role: 'fsd',
    company: remitbee
}

for (key in alien)
{
    console.log(key, alien[key]);
}

## SWITCH CASE

Syntax:

switch (expression) {
    case value1:
        statements
        break;
    case value2:
        statements
        break;
    default:
        statements
}

Switch case is used when you want to execute different code blocks based on different conditions. Multiple cases can share the same code block. The default case is executed when no other cases match.

## FOR EACH

There are two common ways to use forEach in JavaScript:

1. Using for...of loop:
```javascript
for (const element of array) {
    statements
}
```

2. Using Array.forEach() method:
```javascript
array.forEach(function(element, index, array) {
    statements
});
```

# Functions

JavaScript supports several types of functions:

## Function Declaration (Named Function)
```javascript
function functionName(parameters) {
    statements
}
```

## Function Expression (Anonymous Function)
```javascript
const functionName = function(parameters) {
    statements
}
```

## Arrow Functions
Arrow functions provide a shorter syntax for writing function expressions:

Basic syntax:
```javascript
const functionName = (parameters) => {
    statements
}
```

Simplified syntax for single expressions:
```javascript
const functionName = (parameters) => expression
```

## Generator Functions
Generator functions provide a way to define an iterative algorithm by writing a function that can maintain its own state:

```javascript
function* generatorFunction() {
    yield value1;
    yield value2;
}
```

## Recursive Functions
Functions that call themselves to solve problems that can be broken down into smaller, similar sub-problems:

```javascript
function recursive(parameter) {
    if (base_condition) return value;
    return recursive(modified_parameter);
}
```

## Higher Order Functions
Functions that take other functions as parameters or return functions:

```javascript
function higherOrder(parameter, callbackFunction) {
    return callbackFunction(parameter);
}
```

Common higher-order functions include:

### Map
Creates a new array by applying a function to each element:
```javascript
const newArray = array.map(callback);
```

### Filter
Creates a new array with elements that pass a test:
```javascript
const filteredArray = array.filter(callback);
```

# Number and Math Operations

## Number Properties
JavaScript provides several built-in number properties:
- MAX_VALUE: Largest possible number
- MIN_VALUE: Smallest possible positive number
- EPSILON: Smallest difference between numbers
- MAX_SAFE_INTEGER: Largest safe integer
- MIN_SAFE_INTEGER: Smallest safe integer
- POSITIVE_INFINITY: Represents infinity
- NEGATIVE_INFINITY: Represents negative infinity
- NaN: Represents "Not a Number"

## Math Object Methods
JavaScript provides extensive mathematical operations through the Math object:

### Basic Operations
- abs(): Absolute value
- pow(): Power
- sqrt(): Square root
- cbrt(): Cube root
- round(): Rounds to nearest integer
- floor(): Rounds down
- ceil(): Rounds up

### Trigonometric Functions
- sin(), cos(), tan()
- asin(), acos(), atan()
- sinh(), cosh(), tanh()

### Logarithmic Functions
- log(): Natural logarithm
- log10(): Base 10 logarithm
- log2(): Base 2 logarithm

# String Operations

## Query Methods
- at(): Returns character at specified index
- charAt(): Returns character at specified position
- charCodeAt(): Returns Unicode value of character
- codePointAt(): Returns Unicode code point value

## Search Methods
- indexOf(): Finds first occurrence of substring
- lastIndexOf(): Finds last occurrence of substring
- includes(): Checks if string contains substring
- startsWith(): Checks if string starts with substring
- endsWith(): Checks if string ends with substring
- match(): Searches string using regular expression
- search(): Searches string for specified value

## Transformation Methods
- toLowerCase(): Converts to lowercase
- toUpperCase(): Converts to uppercase
- trim(): Removes whitespace from both ends
- padStart(): Pads start of string
- padEnd(): Pads end of string
- repeat(): Repeats string specified number of times
- concat(): Joins two or more strings

## Decomposition Methods
- split(): Splits string into array
- slice(): Extracts part of string
- substring(): Extracts characters between two points
- substr(): Extracts specified number of characters

# Array Methods

JavaScript provides numerous built-in methods for array manipulation. Here are the most commonly used array methods:

## Adding and Removing Elements
1. push(): Adds elements to the end of array
```javascript
const arr = [1, 2, 3];
arr.push(4); // Result: [1, 2, 3, 4]
```

2. pop(): Removes the last element
```javascript
arr.pop(); // Removes last element and returns it
```

3. shift(): Removes the first element
```javascript
arr.shift(); // Removes first element and returns it
```

4. unshift(): Adds elements to the beginning
```javascript
arr.unshift(0); // Result: [0, 1, 2, 3]
```

## Array Transformation
1. concat(): Combines two or more arrays
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
```

2. slice(): Extracts part of an array
```javascript
const arr = [1, 2, 3, 4, 5];
const part = arr.slice(1, 3); // [2, 3]
```

3. splice(): Modifies array by adding/removing elements
```javascript
const arr = [1, 2, 3, 4];
arr.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
```

## Searching and Verification
1. indexOf(): Finds index of an element
```javascript
arr.indexOf(3); // Returns index of 3 or -1 if not found
```

2. includes(): Checks if element exists
```javascript
arr.includes(2); // Returns true/false
```

3. find(): Returns first element that matches condition
```javascript
arr.find(num => num > 3); // Returns first number > 3
```

4. findIndex(): Returns index of first matching element
```javascript
arr.findIndex(num => num > 3); // Returns index of first number > 3
```

## Array Processing
1. filter(): Creates new array with elements that pass test
```javascript
const evenNumbers = arr.filter(num => num % 2 === 0);
```

2. map(): Creates new array by transforming each element
```javascript
const doubled = arr.map(num => num * 2);
```

3. reduce(): Reduces array to single value
```javascript
const sum = arr.reduce((acc, num) => acc + num, 0);
```

## Array Testing
1. every(): Checks if all elements pass test
```javascript
arr.every(num => num < 10); // Returns true if all elements < 10
```

2. some(): Checks if any element passes test
```javascript
arr.some(num => num > 3); // Returns true if any element > 3
```

## Array Ordering
1. sort(): Sorts the array (modifies original)
```javascript
arr.sort((a, b) => a - b); // Numeric sort ascending
```

2. reverse(): Reverses array order
```javascript
arr.reverse(); // Reverses array in place
```

## Array Conversion
1. join(): Converts array to string
```javascript
arr.join("-"); // Joins elements with specified separator
```

2. split(): Converts string to array (string method)
```javascript
"1-2-3".split("-"); // Creates array from string
```

## Iteration
forEach(): Executes function for each element
```javascript
arr.forEach(num => console.log(num));
```

Important Notes:
- Some methods modify the original array (push, pop, shift, unshift, splice, sort, reverse)
- Others return a new array (concat, slice, filter, map)
- When using sort() with numbers, always provide a comparison function
- reduce() is powerful for calculating totals or transforming arrays into other data structures
- Methods like map(), filter(), and reduce() are commonly used in functional programming
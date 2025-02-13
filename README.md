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
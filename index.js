// While Loop

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }
// console.log(x);


//for in loop

// let alien = {
//   Name: 'Vishwesh',
//   age: 23,
//   role: 'fsd',
//   company: "remitbee"
// }

// for (let key in alien){
//   console.log(key, alien[key]);
// }


//switch case 
// const item = 'mutton-biriyani';
// switch (item) {
//   case 'panner-biriyani':
//     console.log("panner biriyani is 150 rupees only")
//     break;
//   case 'mushroom-biriyani':
//     console.log("mushroom biriyani is 180 rupees only")
//     break;
//   case 'chicken-biriyani':
//   case 'mutton-biriyani':
//     console.log("chicken and mutton biriyani are 250 rupees only")
//     break;
//   default:
//     console.log(`${item} is not available`)
//     break;
// }


//for each loop
// const arr = [3, 5, 7];
// for (const i of arr) {
//   console.log(i);
// }


//for each loop
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers);


//functions
//function declaration(named function)
// function greet(name){
//   console.log(`hello ${name}`);
// }
// greet("vishweshwar");

//function expression(Anonymous function)
// const greet = function(name){
//   return `hello ${name}`;
// }
// console.log(greet('vishwesh'))

//arrow functions
// const greet = (name) => {
//   return `hello ${name}`;
// }
// console.log(greet('vissu'))

// const greet = (name) => `hello ${name}`
// console.log(greet('vissu'))

// const add = (a,b) => a+b
// console.log(add(29,3))



//generator functions
// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = generateNumbers();
// console.log(gen.next().value);
// console.log(gen.next().value); 
// console.log(gen.next().value); 


//recursive functions
// function factorial(n){
//   if (n===0) return 1;
//   return n*factorial(n-1);
// }
// console.log(factorial(10))



//higher order function
//using one or more functions inside a function is called higher order function.
// function operate(a,b,operation){
//   return operation(a,b);
// }
// const add = (a,b) => a+b;
// console.log(operate(2,8,add));

//map function
// syntax: const newArray = oldArray.map(callbackfunction);

// const oldArray = ['vishwesh', 'vignesh', 'karthick'];
// const newArray = oldArray.map(name => name.toUpperCase());
// console.log(newArray);


//filter()
//creates a new array which filters according to the given condition and prints
// const numbers = [10, 25, 30, 45, 50];
// const greaterThan30 = numbers.filter(num => num > 30);
// console.log(greaterThan30);

//exponentiation assignmetnt
// sum=10;
// total = sum **= 8;
// console.log(total)


// // Number Properties
// console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // Largest number
// console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // Smallest positive number
// console.log("Number.NaN:", Number.NaN); // Not a Number
// console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // Negative infinity
// console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Positive infinity
// console.log("Number.EPSILON:", Number.EPSILON); // Smallest difference
// console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // Smallest safe integer
// console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // Largest safe integer

// // Number Methods
// console.log("Number.parseFloat('3.14'):", Number.parseFloat("3.14")); // Convert string to float
// console.log("Number.parseInt('42'):", Number.parseInt("42")); // Convert string to integer
// console.log("Number.isFinite(100):", Number.isFinite(100)); // Check if finite
// console.log("Number.isInteger(5.6):", Number.isInteger(5.6)); // Check if integer
// console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // Check if NaN
// console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991)); // Check if safe integer

// // Number Prototype Methods
// let num = 1234.56789;
// console.log("num.toExponential(2):", num.toExponential(2)); // Exponential notation
// console.log("num.toFixed(2):", num.toFixed(2)); // Fixed decimal format
// console.log("num.toPrecision(4):", num.toPrecision(4)); // Specified precision


// console.log("=== Absolute Value ===");
// console.log(Math.abs(-5)); // 5

// console.log("\n=== Trigonometric Functions ===");
// console.log(Math.sin(Math.PI / 2)); // 1
// console.log(Math.cos(0)); // 1
// console.log(Math.tan(Math.PI / 4)); // 1

// console.log("\n=== Inverse Trigonometric Functions ===");
// console.log(Math.asin(1)); // 1.5707963267948966
// console.log(Math.acos(0)); // 1.5707963267948966
// console.log(Math.atan(1)); // 0.7853981633974483
// console.log(Math.atan2(1, 1)); // 0.7853981633974483

// console.log("\n=== Hyperbolic Functions ===");
// console.log(Math.sinh(1)); // 1.1752011936438014
// console.log(Math.cosh(1)); // 1.5430806348152437
// console.log(Math.tanh(1)); // 0.7615941559557649

// console.log("\n=== Inverse Hyperbolic Functions ===");
// console.log(Math.asinh(1)); // 0.881373587019543
// console.log(Math.acosh(2)); // 1.3169578969248166
// console.log(Math.atanh(0.5)); // 0.5493061443340549

// console.log("\n=== Exponential & Logarithmic Functions ===");
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.exp(1)); // 2.718281828459045
// console.log(Math.expm1(1)); // 1.718281828459045
// console.log(Math.log(10)); // 2.302585092994046
// console.log(Math.log10(100)); // 2
// console.log(Math.log1p(1)); // 0.6931471805599453
// console.log(Math.log2(8)); // 3

// console.log("\n=== Rounding Functions ===");
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.round(4.5)); // 5
// console.log(Math.fround(1.337)); // 1.3370000123977661
// console.log(Math.trunc(4.9)); // 4

// console.log("\n=== Min & Max Functions ===");
// console.log(Math.min(1, 3, -5, 7)); // -5
// console.log(Math.max(1, 3, -5, 7)); // 7

// console.log("\n=== Random Function ===");
// console.log(Math.random()); // Example: 0.4837

// console.log("\n=== Root Functions ===");
// console.log(Math.sqrt(16)); // 4
// console.log(Math.cbrt(27)); // 3
// console.log(Math.hypot(3, 4)); // 5

// console.log("\n=== Sign Function ===");
// console.log(Math.sign(-10)); // -1
// console.log(Math.sign(0)); // 0
// console.log(Math.sign(10)); // 1

// console.log("\n=== Bitwise & Integer Operations ===");
// console.log(Math.clz32(1)); // 31 (leading zeros in 32-bit representation)
// console.log(Math.imul(2, 3)); // 6 (32-bit multiplication)




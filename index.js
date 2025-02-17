// // While Loop

// // let n = 0;
// // let x = 0;
// // while (n < 3) {
// //   n++;
// //   x += n;
// // }
// // console.log(x);


// //for in loop

// // let alien = {
// //   Name: 'Vishwesh',
// //   age: 23,
// //   role: 'fsd',
// //   company: "remitbee"
// // }

// // for (let key in alien){
// //   console.log(key, alien[key]);
// // }


// //switch case 
// // const item = 'mutton-biriyani';
// // switch (item) {
// //   case 'panner-biriyani':
// //     console.log("panner biriyani is 150 rupees only")
// //     break;
// //   case 'mushroom-biriyani':
// //     console.log("mushroom biriyani is 180 rupees only")
// //     break;
// //   case 'chicken-biriyani':
// //   case 'mutton-biriyani':
// //     console.log("chicken and mutton biriyani are 250 rupees only")
// //     break;
// //   default:
// //     console.log(`${item} is not available`)
// //     break;
// // }


// //for each loop
// // const arr = [3, 5, 7];
// // for (const i of arr) {
// //   console.log(i);
// // }


// //for each loop
// // const numbers = [65, 44, 12, 4];
// // numbers.forEach(myFunction)

// // function myFunction(item, index, arr) {
// //   arr[index] = item * 10;
// // }
// // console.log(numbers);

// greet("vishweshwar");
// //functions
// //function declaration(named function)
// function greet(name){
//   console.log(`hello ${name}`);
// }


// //function expression(Anonymous function)
// // const greet = function(name){
// //   return `hello ${name}`;
// // }
// // console.log(greet('vishwesh'))

// //arrow functions
// // const greet = (name) => {
// //   return `hello ${name}`;
// // }
// // console.log(greet('vissu'))

// const greet = (name) => `hello ${name}`;
// console.log(greet('vissu'));

// // const add = (a,b) => a+b
// // console.log(add(29,3))



// //generator functions
// // function* generateNumbers() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// // }

// // const gen = generateNumbers();
// // console.log(gen.next().value);
// // console.log(gen.next().value); 
// // console.log(gen.next().value); 


// //recursive functions
// // function factorial(n){
// //   if (n===0) return 1;
// //   return n*factorial(n-1);
// // }
// // console.log(factorial(10))



// //higher order function
// //using one or more functions inside a function is called higher order function.
// // function operate(a,b,operation){
// //   return operation(a,b);
// // }
// // const add = (a,b) => a+b;
// // console.log(operate(2,8,add));
// operate()()

// //map function
// // syntax: const newArray = oldArray.map(callbackfunction);

// // const oldArray = ['vishwesh', 'vignesh', 'karthick'];
// // const newArray = oldArray.map((name,i) => name.toUpperCase());
// // console.log(newArray);


// //filter()
// //creates a new array which filters according to the given condition and prints
// // const numbers = [10, 25, 30, 45, 50];
// // const greaterThan30 = numbers.filter(num => num > 30);
// // console.log(greaterThan30);

// //exponentiation assignmetnt
// // sum=10;
// // total = sum **= 8;
// // console.log(total)


// // // Number Properties
// // console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // Largest number
// // console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // Smallest positive number
// // console.log("Number.NaN:", Number.NaN); // Not a Number
// // console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // Negative infinity
// // console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Positive infinity
// // console.log("Number.EPSILON:", Number.EPSILON); // Smallest difference
// // console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // Smallest safe integer
// // console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // Largest safe integer

// // // Number Methods
// // console.log("Number.parseFloat('3.14'):", Number.parseFloat("3.14")); // Convert string to float
// // console.log("Number.parseInt('42'):", Number.parseInt("42.888")); // Convert string to integer
// // console.log(Number.parseInt("12abc42")) //output: NaN
// // console.log("Number.isFinite(100):", Number.isFinite(100)); // Check if finite
// // console.log("Number.isInteger(5.6):", Number.isInteger(5.6)); // Check if integer
// console.log(isNaN(0)); // Check if NaN
// // console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991)); // Check if safe integer

// console.log(0 == false)

// // // Number Prototype Methods
// // let num = 1234.46489;
// // let num =2;
// // console.log("num.toExponential(2):", num.toExponential(2)); // Exponential notation
// // console.log("num.toFixed(2):", num.toFixed(3)); // Fixed decimal format
// // console.log("num.toPrecision(4):", num.toPrecision(6)); // Specified precision


// // console.log("=== Absolute Value ===");
// // console.log(Math.abs(-5)); // 5

// // console.log("\n=== Trigonometric Functions ===");
// // console.log(Math.sin(Math.PI / 2)); // 1
// // console.log(Math.cos(0)); // 1
// // console.log(Math.tan(Math.PI / 4)); // 1

// // console.log("\n=== Inverse Trigonometric Functions ===");
// // console.log(Math.asin(1)); // 1.5707963267948966
// // console.log(Math.acos(0)); // 1.5707963267948966
// // console.log(Math.atan(1)); // 0.7853981633974483
// // console.log(Math.atan2(1, 1)); // 0.7853981633974483

// // console.log("\n=== Hyperbolic Functions ===");
// // console.log(Math.sinh(1)); // 1.1752011936438014
// // console.log(Math.cosh(1)); // 1.5430806348152437
// // console.log(Math.tanh(1)); // 0.7615941559557649

// // console.log("\n=== Inverse Hyperbolic Functions ===");
// // console.log(Math.asinh(1)); // 0.881373587019543
// // console.log(Math.acosh(2)); // 1.3169578969248166
// // console.log(Math.atanh(0.5)); // 0.5493061443340549

// // console.log("\n=== Exponential & Logarithmic Functions ===");
// // console.log(Math.pow(2, 3)); // 8
// // console.log(Math.exp(1)); // 2.718281828459045     Math.exp(x) - 1 == Math.expm1(x)
// // console.log(Math.expm1(1)); // 1.718281828459045
// // console.log(Math.log(10)); // 2.302585092994046
// // console.log(Math.log10(100)); // 2
// // console.log(Math.log1p(1)); // 0.6931471805599453
// // console.log(Math.log2(8)); // 3

// // console.log("\n=== Rounding Functions ===");
// // console.log(Math.floor(-4.9999)); // 5
// // console.log(Math.ceil(4.1)); // 5
// // console.log(Math.round(4.5)); // 5
// // console.log(Math.fround(1.337)); // 1.3370000123977661 shows nearest 32 bit single representation
// // console.log(Math.trunc(-4.44)); // -4

// // console.log("\n=== Min & Max Functions ===");
// // console.log(Math.min(1, 3, -5, 7)); // -5      
// // console.log(Math.max(1, 3, -5, 7)); // 7

// // console.log("\n=== Random Function ===");
// // console.log(Math.random()); // Example: 0.4837

// // console.log("\n=== Root Functions ===");
// // console.log(Math.sqrt(16)); // 4
// // console.log(Math.cbrt(27)); // 3
// // console.log(Math.hypot(3, 4)); // 5

// // console.log("\n=== Sign Function ===");
// // console.log(Math.sign(-10)); // -1
// // console.log(Math.sign(0)); // 0
// // console.log(Math.sign(10)); // 1

// // console.log("\n=== Bitwise & Integer Operations ===");
// // console.log(Math.clz32(5)); // 31 (leading zeros in 32-bit representation)
// // console.log(Math.imul(2, 3)); // 6 (32-bit multiplication)





// // String Query Methods
// // let str = "Hello, World!";
// // console.log(str.at(7)); // "W"
// // console.log(str.charAt(7)); // "W"
// // console.log(str.charCodeAt(7)); // 87 (ASCII code of 'W')
// // console.log(str.codePointAt(7)); // 87 (same as charCodeAt)

// // // String Search Methods
// // console.log(str.indexOf("o")); // 4 (first 'o' position)
// // console.log(str.lastIndexOf("o")); // 8 (last 'o' position)
// // console.log(str.startsWith("Hello")); // true
// // console.log(str.endsWith("!")); // true
// // console.log(str.includes("World")); // true
// // console.log(str.match(/[A-Z]/g)); // ["H", "W"] (matches uppercase letters)
// // console.log([...str.matchAll(/[o]/g)]); // Array of match objects
// // console.log(str.search("World")); // 7 (index of first match)

// // // String Composition Methods
// // console.log("59".padStart(3, "00")); // "059"
// // console.log("5".padEnd(3, "0")); // "500"
// // console.log("Hello".concat(", ", "World!")); // "Hello, World!"
// // console.log("Ha".repeat(3)); // "HaHaHa"

// // // String Decomposition Methods
// // console.log(str.split(", ")); // ["Hello", "World!"]
// // console.log(str.slice(7, 12)); // "World"
// // console.log(str.substring(7, 12)); // "World"
// // console.log(str.substr(7, 5)); // "World" (deprecated)
// // console.log("   Trim me!   ".trim()); // "Trim me!"
// // console.log("   Trim me!   ".trimStart()); // "Trim me!   "
// // console.log("   Trim me!   ".trimEnd()); // "   Trim me!"

// // // String Transformation Methods
// // console.log("TeST".toLowerCase()); // "test"
// // console.log("TeST".toUpperCase()); // "TEST"
// // console.log("İstanbul".toLocaleLowerCase("tr")); // "istanbul"
// // console.log("istanbul".toLocaleUpperCase("tr")); // "İSTANBUL"
// // console.log("café".normalize()); // "café" (normalizes Unicode)
// // console.log("hello".toWellFormed()); // "hello" (ensures valid Unicode)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Arrays

// // Creating an array


// const arr = [1, 2, 3, 4, 5];
// const newArr = [...arr];
// console.log(typeof arr)
// // let temp = [ ];
// // // console.log(arr[3]); // 4
// // arr.push(5);
// // // console.log(arr); // [1, 2, 3, 4, 5, 5]
// // arr.unshift(0);
// // // console.log(arr); // [0, 1, 2, 3, 4, 5, 5]
// // let lastnumber = arr.pop();
// // console.log(lastnumber);
// // console.log(arr); // [0, 1, 2, 3, 4, 5]
// // arr.shift();
// // console.log(arr); // [1, 2, 3, 4, 5]


// let list = [
// {text: 'milk', cost: 10, need: true},
// {text: 'bread', cost: 20, need: false},
// {text: 'butter', cost: 30, need: false},
// {text: 'jam', cost: 40, need: true},
// {text: 'cheese', cost: 50, need: true}
// ];

// let items = ' ';
// let total = 0;

// // for (let i = 0; i < list.length; i++) {
// //   if (list[i].need === false) {
// //     continue;
// //   }
// //   items += `<li>${list[i].text}</li>`;
// //   total += list[i].cost;
// // }



// // let i = 0;
// // while (i < list.length) {
// //   if (list[i].need === false) {
// //     i++;
// //     continue;
// //   }
// //   items += `<li>${list[i].text}</li>`;
// //   total += list[i].cost;
// //   i++;
// // }



// // list.forEach((item) => {
// //   if (item.need === false) {
// //     return;
// //   }
// //   items += `<li>${item.text}</li>`;
// //   total += item.cost;
// // })


// //for of loop
// // for (const item of list) {
// //   if (item.need === false) {
// //     continue;
// //   }
// //   items += `<li>${item.text}</li>`;
// //   total += item.cost;
// // }

// // for(let [index, item] of list.entries()){
// //   if (item.need === false) {
// //     continue;
// //   }
// //   items += `<li>${index+1}. ${item.text}</li>`;
// //   total += item.cost;
// // }

// // //sorting arrays
// // list.sort().reverse();

// list.sort((a,b)=>{
//   if(a.text === b.text){
//     return -1;
//   }
//   if(a.text > b.text){
//     return 1;
//   }
//   return 0;
// })

// for (const item of list) {
//   if (item.need === false) {
//     continue;
//   }
//   items += `<li>${item.text}</li>`;
//   total += item.cost;
// }



// document.getElementById('list-items').innerHTML = items;
// document.getElementById('total').innerHTML = total;

// // Array Methods Examples

// const arr = [1, 2, 3, 4, 5];

// // 1. push() - Adds elements to the end
// arr.push(6);
// console.log("push:", arr);

// // 2. pop() - Removes last element
// arr.pop();
// console.log("pop:", arr);

// // 3. shift() - Removes first element
// arr.shift();
// console.log("shift:", arr);

// // 4. unshift() - Adds elements to the beginning
// arr.unshift(0);
// console.log("unshift:", arr);

// // 5. concat() - Combines arrays
// const newArr = arr.concat([6, 7, 8]);
// console.log("concat:", newArr);

// // 6. slice() - Extracts part of an array
// console.log("slice:", arr.slice(1, 3));

// // 7. splice() - Modifies an array (add/remove elements)
// arr.splice(2, 1, 10);
// console.log("splice:", arr);

// // 8. indexOf() - Finds index of an element
// console.log("indexOf 3:", arr.indexOf(3));
// const names = ["vignesh", "vishwesh", "karthick", "vishwesh", "vishwesh"];
// console.log(names.indexOf("vishwesh"));

// // 9. includes() - Checks if element exists
// console.log("includes 2:", arr.includes(2));

// // 10. find() - Finds the first element that matches
// console.log("find >3:", arr.find(num => num > 3));

// // 11. findIndex() - Finds index of first match
// console.log("findIndex >3:", arr.findIndex(num => num > 3));

// // 12. filter() - Returns array of matching elements
// console.log("filter even:", arr.filter(num => num % 2 === 0));

// // 13. map() - Transforms each element
// console.log("map *2:", arr.map(num => num * 2));

// // 14. reduce() - Reduces array to single value
// console.log("reduce sum:", arr.reduce((acc, num) => acc + num, 0));

// // 15. every() - Checks if all elements match condition
// console.log("every <10:", arr.every(num => num < 10)); (return type is boolean)

// // 16. some() - Checks if any element matches condition
// console.log("some >3:", arr.some(num => num > 3)); // true (return type is boolean)

// // 17. sort() - Sorts array (modifies original)
// const sortedArr = [...arr].sort((a, b) => a - b);
// console.log("sort:", sortedArr);

// // 18. reverse() - Reverses the array
// console.log("reverse:", arr.reverse());

// // 19. join() - Converts array to string
// console.log("join:", arr.join("-"));

// // 20. split() (not an array method but used with join)
// console.log("split:", "1-2-3".split("-"));

// // 21. forEach() - Iterates over elements
// arr.forEach(num => console.log("forEach:", num));

// let arr1 = [1, 2, 3, 4, 5];
// arr1.copyWithin(3, 3, 4);
// console.log(arr1); // [1, 2, 3, 4, 5]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Objects

// // Creating an object

// const alien = {
//   name: 'Vishwesh',
//   age: 23,
//   role: 'fsd',
//   company: "remitbee",
//   greet: function () {
//     console.log(`hello ${this.name} and his weight is ${this.weight}`);
//   }
// }
// // console.log(alien);

// // creating prototype
// const human = {
//     weight : 60,
// }
// // console.log(human.weight);

// human.__proto__ = alien;

// human.greet();

//////////////////////////////////////

//creating object using classes

class toyotaCar{
    start(){
        console.log('car started');
    }
    stop(){
        console.log('car stopped');
    }
    setBrand(brand){
        this.carBrand = brand;
    }
}

let fortuner = new toyotaCar();
fortuner.start();
fortuner.stop();
fortuner.setBrand('fortuner');
console.log(fortuner.carBrand);



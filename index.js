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
function factorial(n){
  if (n===0) return 1;
  return n*factorial(n-1);
}
console.log(factorial(10))

//higher order function

// While Loop

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }
// console.log(x);

let alien = {
  Name: 'Vishwesh',
  age: 23,
  role: 'fsd',
  company: "remitbee"
}

for (let key in alien){
  console.log(key, alien[key]);
}
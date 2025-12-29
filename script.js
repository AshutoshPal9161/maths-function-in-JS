
console.log('Addition of two numbers: ', 5 + 3)
console.log('Subtraction of two numbers: ', 5 - 3)
console.log('Multiplication of two numbers: ', 5 * 3)
console.log('Division of two numbers: ', 5 / 3)
console.log('Modulus of two numbers: ', 5 % 3)
console.log('Exponentiation of two numbers: ', 5 ** 3)
console.log('Exponentiation of two numbers: ', 2 ** 3 ** 2) // right to left associativity

// math object in JavaScript
console.log('Value of PI: ', Math.PI);
console.log('Value of E: ', Math.E);

// Rounding Methods
console.log('Round 4.6: ', Math.round(4.5)); // nearest integer
console.log('Ceil 4.2: ', Math.ceil(4.01)); // smallest integer greater than or equal to x 
console.log('Floor 4.8: ', Math.floor(4.55)); // largest integer less than or equal to x
console.log('Trunc 4.9: ', Math.trunc(4.00)); // removes the decimal part
console.log('math.random(): ' , Math.random()); // generates random number between 0 and 1
console.log('math.random() 10 to 20 : ' , Math.floor(Math.random() *10 + 10))

// Other Methods
console.log('Absolute value of -5: ', Math.abs(-5));
console.log('Power of 2^3: ', Math.pow(2, 3));

console.log('Square root of 16: ', Math.sqrt(16));
console.log('Cube root of 27: ', Math.cbrt(27));


const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

console.log(width * height);
document.write(`Rectangle Area: ${width * height}`);

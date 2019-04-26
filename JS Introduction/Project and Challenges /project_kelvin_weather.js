//forecast in kelvin 
let kelvin = 293;

//forecast in celsius is equal k-273
let celsius = kelvin - 273;
console.log (celsius);

//forecast in fahrenheit, method from the Math library to round down the Fahrenheit temperature. 
let fahrenheit = Math.floor(celsius *(9/5) + 32);
console.log (`The temperature is ${fahrenheit} degrees Fahrenheits.`);

kelvin = 0; 
celsius =  kelvin - 273;
fahrenheit = Math.floor(celsius *(9/5) + 32);
console.log (`The temperature is ${fahrenheit} degrees Fahrenheits.`);

let newton = Math.floor(celsius * 33/100); 
console.log (`The temperature is ${newton} degrees Newton.`);











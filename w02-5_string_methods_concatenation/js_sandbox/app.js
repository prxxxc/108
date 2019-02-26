const firstName = 'PingRou';
const lastName = 'Chen';
const age = 18;
const str = 'Hello there my name is PingRou';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'PingRou';
val += 'Chen';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// concat()
val = firstName.concat(' ', lastName);
console.log(val);

val = firstName.toUpperCase();
console.log(val);

val = firstName.toLocaleUpperCase();
console.log(val);

val = firstName.toLocaleLowerCase();
console.log(val);

// indexOf()
val = firstName.indexOf('g');
console.log(val);
val = firstName.lastIndexOf('i');
console.log(val);
// charAt()
val = firstName.charAt('5');
console.log(val);
// get last char
val = firstName.charAt(firstName.length-1);
console.log(val);
// substring()
val = firstName.substring(4,7);
console.log(val);
// slice()
val = firstName.slice(0,4);
console.log(val);
val = firstName.slice(-3);
console.log(val);
// split()
val = str.substring(' ');
console.log(val);
val = tags.substring(',');
console.log(val);

// replace()
val = str.replace('PingRou','ABC');
console.log(val);

// includes()
val = str.includes('PingRou');
console.log(val);
let val;

// Number to string {number & sum}
val = String(666) 
console.log("String(666) = ",val); 

val = String(2+2) 
console.log("String(2+2) = ",val); 
// Bool to string
val = String(true) 
console.log("String(true) = ",val); 
// Date to string
val = String(new Date()); 
console.log("String(new Date) = ",val); 
// Array to string
val = String([1,2,3,4]); 
console.log("string([1,2,3,4]) = ",val); 
// toString() {number & bool}
val = (5).toString();
console.log("(5).toString = ",val);

val = (true).toString();
console.log("(true).toString = ",val);
// String to number {char & bool & null & string & array}
val = Number('5');
console.log("Number('5') = ",val);

val = Number(true);
console.log("Number(true)",val);

val = Number(false);
console.log("Number(false)",val);

val = Number(null);
console.log("Number(null)",val);

val = Number('hellow');
console.log("Number('hellow')",val);
// parseInt & parseFloat
val = parseInt('100.30');
console.log("parseInt = ",val);

val = parseFloat('100.30');
console.log("parseFloat = ",val);
// Output {consol val & typeof val & val.length & val.to Fixed(2)}
console.log(val);

console.log(typeof val);

val = 'hello';
console.log("length = ",val.length);

val = 100.123;
console.log("to Fixed(2) = ",val.toFixed(2));

const val1 = String(5);
console.log("vall = String(5)");
const val2 = 6;
console.log("val2 = 6");
const sum = Number(val1 + val2);
console.log("Number(val1+val2) = ",sum);
console.log(typeof sum);
//consol.log {sum & typeof sum}
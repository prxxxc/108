let val;

const today = new Date();
console.log(today);
let birthday = new Date('4-13-2000');
console.log(birthday);
birthday = new Date('April 13 2000');
console.log(birthday);
birthday = new Date('4/13/2000');
console.log(birthday);

val = today.getMonth();
console.log(val);
val = today.getDate();
console.log(val);
val = today.getDay();
console.log(val);
val = today.getFullYear();
console.log(val);
val = today.getHours();
console.log(val);
val = today.getMinutes();
console.log(val);
val = today.getSeconds();
console.log(val);
val = today.getMilliseconds();
console.log(val);
val = today.getTime();
console.log(val);

birthday.setMonth(4);
console.log(birthday)
birthday.setDate(13);
console.log(birthday)
birthday.setFullYear(2000);
console.log(birthday)
birthday.setHours(3);
console.log(birthday)
birthday.setMinutes(30);
console.log(birthday)
birthday.setSeconds(25);
console.log(birthday)
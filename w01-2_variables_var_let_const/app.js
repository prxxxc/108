 // var, let, const

 var name = "PingRou Chen"
 console.log(name);
 name = '陳品柔';
 console.log(name);
 name = "2019";
 console.log(name);

 var greeting;
 console.log(greeting);
 greeting = 'Hello';
 console.log(greeting);

  // letter, numbers, _, $,
  // annot start with number

  //Multi word vars
  var firstName = "PingRou"; //Camel case, preferred
  var first_name = "John"; // Underscore
  var firstName = "Sara"; //Pascal case
  var firstname;

  // let
  let name2 = "PingRou Chen";
  console.log(name2);
  name2 = '陳品柔';
  console.log(name2);
  name2 ="2019";
  console.log(name2);

  // const
  // const name3 = "PingRou Chen";
  // console.log(name3);
  // name3 = '陳品柔';
  // console.log(name3);
  // name3 = '2019';
  // console.log(name3);

  const person = {
      name: 'PingRou Chen',
      age: 18
  };

  person.name = 'PingRou Chen';
  person.age = 18;
  console.log(person);

  const numbers = [7,8,9,10,11];
  numbers.push(12);
  console.log(numbers);
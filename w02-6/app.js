const name = 'PingRou';
const age = 18;
const job = 'Web Developer';
const city = 'Tanshui';
let html;

// Without template strings (es5)

html = '<ul>' +
       '<li> Name: ' + name + '</li>' +
       '<li> Age: ' + age + '</li>' +
       '<li> Job: ' + job + '</li>' +
       '<li> city: ' + city + '</li>' +
       '</ul';

document.body.innerHTML = html;
// With template strings (es6)

function hello(){
    return 'hello';
}

html = `
   <ul>
     <li> Name: ${name} </li>
     <li> Age: ${age} </li>
     <li> Job: ${job} </li>
     <li> City: ${city} </li>
     <li> ${(age>=18 ? 'Over 18' : 'Under 18')} </li>
     <li> ${hello()} </li>
    </ul>
`;
document.body.innerHTML = html;
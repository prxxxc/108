// FOR LOOP
for(let i=1;i<=5;i++){
    console.log("Number "+i);
}
// WHILE LOOP
let i = 1;
while(i<=5){
    console.log("Number "+i);
    i++;
}

// DO WHILE
let j = 1;
do{
    console.log("Number "+j);
    j++;
}while(j<=5);

// LOOP THROUGH ARRAY
const fruits = ['apple','banana','grape','melon'];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// FOREACH
fruits.forEach(function(apple, banana ,grape){
    console.log(`${banana}:${apple}`);
    console.log(grape);
});

// MAP

const users = [
    {
        id: 1,
        name:'John'
    },
    {
        id: 2,
        name: 'Sara'
    },
    {
        id: 3,
        name: 'Steve'
    }
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);
// FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}
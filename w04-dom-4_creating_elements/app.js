// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
console.log("oldHeading",oldHeading)
//Parent
const cardAction
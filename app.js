// import functions
import { people } from './data.js';

// console.log(people, 'people');

// grab DOM elements
const selectEl = document.querySelector('#name');
const nameEl = document.querySelector('h5');
const ageEl = document.querySelector('p');
const bioEl = document.querySelector('span');
const hobbiesEl = document.querySelector('ul');
const contain = document.querySelector('div');
// console.log(selectEl);

// console.log('Elements', selectEl, nameEl, ageEl, bioEl, hobbiesEl, container);

selectEl.addEventListener('change', (e) => {

    const selected = e.target.value;

    hobbiesEl.innerHTML = ' ';
    
    contain.classList.remove('Yovana', 'Andy', 'Bob', 'Mary');
   
    if (selected === 'one') {
        renderPerson(0);
    } if (selected === 'two') {
        renderPerson(1);
    } if (selected === 'three') {
        renderPerson(2);
    } if (selected === 'four') {
        renderPerson(3);
    }
});

function renderPerson(index) {
    contain.classList.add(`${people[index].name}`);
    nameEl.textContent = 'name:' + people[index].name;
    ageEl.textContent = 'age' + people[index].age;
    bioEl.textContent = 'bio' + people[index].bio;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}
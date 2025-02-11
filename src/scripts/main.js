'use strict';

const list = document.querySelectorAll('li');

const allPerson = [];

function createMassivPerson(listPerson) {
  for (let i = 0; i < list.length; i++) {
    const person = {};

    person.name = list[i].textContent.trim();
    person.position = list[i].getAttribute('data-position');
    person.salary = list[i].getAttribute('data-salary');
    person.age = list[i].getAttribute('data-age');
    allPerson.push(person);
  }
}

function filterObject(persons) {
  persons.sort((a, b) => {
    return (
      +b['salary'].match(/\d/g).join('') - +a['salary'].match(/\d/g).join('')
    );
  });
}
createMassivPerson(list);
filterObject(allPerson);

const allElement = document.querySelector('ul');

allElement.innerHTML = '';
allElement.style.listStyle = 'square inside';

for (const one of allPerson) {
  const person = document.createElement('li');

  person.textContent = one.name;
  allElement.append(person);
}

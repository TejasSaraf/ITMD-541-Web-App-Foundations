function sortPeopleByAge(people) {
  const sortedPeople = people.slice().sort((a, b) => a.age - b.age);
  const sortedPeopleString = sortedPeople.map(
    (person) => `${person.name} is ${person.age} and from ${person.city}`
  );
  console.log(sortedPeopleString);
}

// Test cases
const peopleArray1 = [
  { name: "Brian", age: 25, city: "Chicago" },
  { name: "James", age: 22, city: "Las Vegas" },
  { name: "Mark", age: 30, city: "Seattle" },
  { name: "Tim", age: 27, city: "New York" },
  { name: "Elon", age: 20, city: "Austin" },
];

const peopleArray2 = [
  { name: "Jeff", age: 35, city: "Michigan" },
  { name: "Larry", age: 28, city: "Denver" },
  { name: "Bill", age: 33, city: "Wisconsin" },
  { name: "Warren", age: 24, city: "San Francisco" },
  { name: "Steve", age: 21, city: "San Jose" },
];

sortPeopleByAge(peopleArray1);
sortPeopleByAge(peopleArray2);

// Написать функцию, которая поверхностно сравнивает два объекта
// * В объекте могут быть функции

interface User {
  name: string;
  age: number | (() => number);
}

const user1: User = {
  name: "Vlad",
  age: 23,
};

const user2: User = {
  name: "Vlad",
  age: 23,
};

const user3: User = {
  name: "Vlad",
  age: () => 23,
};

const user4: User = {
  name: "Vlad",
  age: () => 23,
};
function compareUsers(Object1: User, Object2: User): boolean {
  for (const key in Object1) {
    if (Object1[key as keyof User].toString() !== Object2[key as keyof User].toString()) {
      return false;
    }
  }
  return true;
}
console.log(compareUsers(user4, user3));
console.log(compareUsers(user2, user1));

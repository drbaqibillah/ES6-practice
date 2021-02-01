const person = {name: "jack", occupation: "student", age: "21", gfName: "emma watson", address: "Khilkhet", friends:['Hanks', 'Sunny', 'Munna', 'Aguero', 'Fuad']}
console.log(person.address,person.age);
console.log(person.friends[2]);
// const gfName = person.gfName;
// const address = person.address;
// const occupation = person.occupation;
// const age = person.age;
const { age} = person;
console.log(age);


const complexObject = {
    name: 'LIMON',
    info: {
        address: "lalmatia",
        leader: "habib",
        friend: "musa"
    }
}
const {leader} = complexObject.info;
console.log(leader);

const friends = ['sakib khan', 'amir khan', 'halim khan', 'farid khan', 'uzzal khan']
const [choto, u, yt, ...rest] = friends;
console.log(choto,u,yt, ...rest);
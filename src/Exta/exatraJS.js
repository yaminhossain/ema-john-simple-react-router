// const arr = [1,2,3,1,1,1,2,2,3];
// console.log(arr);
// for(const i of arr){
//     console.log(i);

// }

// const student = [
//   { id: 1, name: "Yamin" },
//   { id: 2, name: "Hossain" },
//   { id: 3, name: "Omi" },
// ];

// const empArr = [];
// for (let person of student){
//     if(person.id ===1 ){
//         person.name = "Anik";
//     }
//     empArr.push(person);

// }
// console.log(empArr);

const students=[
  {name:"Yamin",age:25},
  {name:"Anik",age:26}
];
console.log(students);
students[0].age=26;
const s = students[0];
students.push(s);
console.log(students);
// arrow function
const user = () => console.log("hello");
user();

const user1 = (num) => {return num+5};
var output = user1(10);
console.log(output);

// classes
class user2{
    constructor(msg){
        this.msg =msg;
    }
    admin(){
        console.log(this.msg);
    }
}
let obj = new user2("hi");
let obj1 = new user2("hello");
obj.admin(); 
obj1.admin();

// for of
const arr = [1,2,3,4]
for(const a of arr){
    console.log(a);
}

// default parameter
const user3 = (name,age=20) => {
    console.log(name+" "+ age);
}
user3("ramya",25);

// rest operator = rest of values
const user4 = (name,...remaining) => {
    console.log(name+" "+ remaining);
}
user4("ramya",25,"mail@",234567);

// spread operator = spreading values to one array to another array
let arr2 = [6,8,7,9,0]
let arr3 = [5,8,23,87]
let arr4 =[...arr2,...arr3]
console.log(arr4);

// destructuring
let person = {
    name : "ram",
    age : 20,
    num : 234567
}
const{name,age,num} = person;
console.log(name);

// includes operator
const new1 = [3,7,4,6,8]
console.log(new1.includes(4));

// exponential operator
console.log(3**3);

// padstart and padend
let str = "ramya"
console.log(str.padStart(6,'*'));
console.log(str.padEnd(6,'*'));
console.log(str.padStart(8,'*'));
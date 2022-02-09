// number datatype
let Data = 8;
console.log(Data);

// string datatype
let user = 'Ramya';
console.log(user);

// string concate
let firstName = "naga";
let secondName = "Ramya";
console.log(firstName +""+secondName);

// boolean datatype
let bool = 5>6
console.log(bool);

// null datatype
let user1 = null;
console.log(typeof user1);

// undefined
let x
console.log(x);

// object creation
let data1 = {
    name : "ramya",
    age : 20
}
console.log(data1.name);

// arrays
const arr = [1,2,3,4];
console.log(arr);
console.log(arr[2]);

// function without parameters
function myName(){
    console.log('Hello Ramya');
}
myName();

// function with parameters
function arg(num1,num2){
    return num1 * num2;
}
var output = arg(2,5);
console.log(output);

// conditional statement
let marks = 40;
if(marks>75){
    console.log('Grade A');
}
else if(marks>55){
    console.log('Grade B');
}
else{
    console.log('Grade C');
}
let person= {
    name: "billy",
    age : 30,
    mail : "billy@gmail"
}
console.log(Object.entries(person));
console.log(Object.values(person));

// asynch and await
//  let asynch = () =>{
//     const response = await axios.get("'https://jsonplaceholder.typicode.com/todos/1");
//     console.log(response.data);
// }

// regular expressions
let user = "Hello world 123";
console.log(user.match(/hello/i));
console.log(user.match(/abc/i));
console.log(user.match(/[a-z]/g));
console.log(user.match(/[0-9 ]/g));
console.log(user.match(/[^0-9 ]/g)); //other than numbers remaining data

let data = [1,2,3,4,5]
console.log(Math.max(...data));

// flat
let data1 = [12,13,45,[34,87,95,[65,45,32]]]
console.log(data1.flat(1));

// function to string conversion
function fun(){
    console.log('Hello world');
}
console.log(fun.toString())

// trims
let name = " shreya "
console.log(name.trimStart());
console.log(name.trimEnd());

// object to fromentries
let log1 = [["name","john"],["age",25]];
console.log(Object.fromEntries(log1));
// for loop
let output = 0;
for(let i=1; i<=10; i++){
    output = output+i;
}
console.log(output);

// while loop
let output1 = 0;
while(output<=10){
    console.log(output);
    output++;
}

// isArray method
let data = [1,2,3,4];
console.log(Array.isArray(data));

// map method
let data1 = [1,2,3,4,5];
data1.map(
  function(element){
      console.log(element);
  }  
)

// map method 2
let arr = [1,2,3,4,5];
let output2 = arr.map(
    function(element){
        return element+1;
    }
)
console.log(output2);

// filter method
let arr1 = [1,2,3,4,5];
let output3 = arr1.filter(
    function(element){
        return element>2;
    }
)
console.log(output3);

// for each
let arr4 = [1,2,3,4,5];
arr4.forEach(
    function(element){
        console.log(element);
    }
)

// every method
let arr5 = [7,2,4,5];
let output4 = arr5.every(
    function(element){
        return element>0;
    }
)
console.log(output4);

// index and last index
let arg1 = [7,6,4,5,4,6];
console.log(arg1.indexOf(4));
console.log(arg1.lastIndexOf(4));

// JSON stringify
let obj = {
    name : "Ramya",
    age : "22",
    height : 5.5
}
let json = JSON.stringify(obj);
console.log(json);

// date obj
let date = new Date();
console.log(date.valueOf());
// let obj = {
//     name: "Webbrain",
//     age: 23,
//     child:{
//         name:"eshmat",
//         age: 11,
//         child: {
//             name:"toshmat",
//             age: 33,
//         },
//     },
// };



// let sum = 0;
// while(obj){
//     sum += obj.age;
//     obj = obj.child;
// };

// console.log(sum);

// ==========================garbage collection
// let obj1 = {name: "academy"};

// obj1 = null; 

// console.log(obj1);
// ==============================this

// let user = {
//     name: "webbrain",
//     sayHi: function(){
//        console.log("Hi");
//     }
// };

// user.sayHi();

// console.log(this);
// function sayHi(){
//     console.log("hi");
// }
// sayHi();
// let user = {
//     name: "webbrain",
//     sayHi: function(){
//        console.log("Hi");
//     }
// };

// user.sayHi();

// let user = {
//     name: "webbrain",
//     age: 2,
//     owner: "Sardorbek",
//     sayHi(){
//         // console.log(`Hi, ${user.name}`);
//         console.log(`Hi, ${this.name}`);
//     },
//     getName(){
//         console.log(`Hi, ${this.name}`);
//     }
// };
// let usr = user;
// user = null;
// usr.sayHi();


// usr.getName();
// lesson 5
// ====================while, do while loops===================
// let i = 3;
// while(i){
//     console.log(i);
//     i--;

// // }
// let i = 3;
// do{
//     console.log(i);
// }while(i--)






// ==========================function=====================
// function getAvr(){
//     console.log("Ulug'bek");
//     console.log("Ulug'bek");
//     console.log("Ulug'bek");
//     console.log("Ulug'bek");
//     console.log("Ulug'bek");
//     console.log("Ulug'bek");
//     console.log("Ulug'bek");
// }

// getAvr();
// function getAvg(){
//     console.log(`Ulug'bek, welcome to GOOGLE!`);
// }

// getAvg();

// const getAvg = function(){
//     console.log(`Ulug'bek, welcome to the US!`);
// }

// getAvg();

// const getAvg = ()=>{}; => arrow function
// const getAvg = function(name){
//     console.log(`${name}, welcome to America!`);
// }

// getAvg(`Ulug'bek`);
// getAvg(`Nurbek`);
// getAvg(`Asilbek`);
// getAvg(`Diyorbek`);  


// const getAvg = function(surname, name, age){
//     console.log(`Surname: ${surname}`);
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
// }
  
// getAvg(`Karimov`, `Ulug'bek`, 18);



// const getAvg = function(name, age){
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
// }

//   getAvg(`Ulug'bek`, `Karimov`, 18);

// const getAvg = function(name, age){
//     console.log(`Name: ${name}`);
//     console.log(`Surname:`);
//     console.log(`Age: ${age}`);
// }

//   getAvg(`Ulug'bek`, `Karimov`, 18);



// const getAvg = function(name, age){
//     console.log(`Name: ${name}`);
//     console.log(`Surname:`);
//     console.log(`Age: ${age}`);
// }

// //   getAvg(`Ulug'bek`, 18,`Karimov`);

// const getAvg = function(name, age, surname){
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
// }

//   getAvg(`Ulug'bek`, `Karimov`, 18);


// const getAvg = function(surname, name, age){
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
// }

//   getAvg(`Ulug'bek`, `Karimov`, 18);


// const getAvg = function(age, name, surname){
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
// }

//   getAvg(`Ulug'bek`, `Karimov`, 18);

// const getAvg = function(name, age, surname){
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
// }

//   getAvg(`Ulug'bek`, `Karimov`, 18);
// =========================innner variable
// const test= () =>{
//     let name = `Ulug'bek`; 
//     console.log(name);
// };

// test();
// ===========================outer variable
// let name = `Ulug'bek`; 
// const test= () =>{
//     let name = `Karimov`;
//     console.log(name);
// };

// test();


// const telegram = (name, surname) => {
//    console.log(name, surname); 
// }


// telegram(`Ulug'bek`);


// const telegram = (name, surname) => {
//     if(surname) console.log(name, surname); 
//     else{
//         console.log(name);
//     }
//  }
 
 
//  telegram(`Ulug'bek`, `Karimov`);

// const telegram = (name, surname)=>{
//  surname ? console.log(name, surname):console.log(name);;
     
// }


// telegram(`Ulug'bek`, `Karimov`);
// const telegram = (name, surname = "")=> {
//     console.log(name, surname);
// }

// telegram(`Ulug'bek`, `Karimov`);
// =======================function with return
// const gpa = ()=>{

// };
// console.log(gpa());

// const gpa = ()=>{
//    return `how are you?`; 
// }

// console.log(gpa());

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//     let res = (a + b + c + d) / 4;
//     console.log(res);
//     return `how are you?`
// }
// console.log(gpa(3, 4, 3, 4));
// console.log(gpa(4, 5, 2, 4));
// console.log(gpa(2, 5, 4, 2));


// // console.log(gpa(gpa(3, 4, 3, 4) + gpa(4, 5, 2, 4) + gpa(2, 5, 4, 2))/3);

// const getNum = (a) => {
//     let total = 200;
//     return ((a * 100) / total);
// };

// console.log(parseInt(getNum(123)));


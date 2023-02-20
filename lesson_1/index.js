// ================= Variables
// let a = 4;
// console.log(a);
// var let const
// var = global, lekn ancha eski versiya va u serverda ko'p joy egallaydi
// var a = 5;
// console.log(a);
// let = scope, bugungi kunda deyarli barch ishlatadi va u o'ziga kerakli joy egallaydi xolos
// let a = 5;
// console.log(a);
// const = o'zgarmas, unga bitta qiymat berilganidan so'ng boshqa qiymat qabul qilmaydi
// const a = 5;
// console.log(a);
//  let num = 1, a = 2, b = 3;
// console.log(num, a , b);
// let a = (c = b = 3);
// console.log(a, b , c);
// agar xech qanday o'zgaruvchi biriktrilmasa bu avtomatik tarzda var bo'ladi
// b = 3;
// console.log(b);
// ===================Data types==========================
// JS da datatype lar 8xil bo'ladi:
// Primitive=> passed by value, Non-primitive => passed by refference
//Primitive: Number, BidInt, String, Boolean, Null, Undefined, Symbols, Non-primitive: Objects
// Number => float tushunchasi mavjud va bu qoldiqli raqamlar hisoblanadi (1.23),(2.45),
// BigInt => bu ham numberga tegishli bo'lib, number datatype ning maksimal raqam qiymatidan, 
// oshib ketgan xolatlarda ishlariladi (9032489728479237n + 5n);
// String => '', "", ``
// let name = 'Webbrain Academy'
// console.log('Welcome to ' + name + ', IT Center');
// let name = 'Webbrain Academy'
// console.log(`Welcome to ${name}, IT Center`);
// console.log('Welcome to \nWebbrain Academy');
// typeof => bu, bizga ma'lumotning turini aniqlashda yordam beradi
// let a = 3;
// console.log(typeof a);
// let b = 'Webbrain Academy';
// console.log(typeof b);
// Boolean => bu datatype ning ikki xil qiymati bor: True or False
//  let a;
//  let b = null;
//  console.log(typeof a, typeof b); terminal: unefined, null
// console.log(null == undefined); terminal: true
// console.log(null === undefined); terminal : false
// isNaN => is it Not a Number
// let a = 3;
// console.log(isNaN(a + 'Welcome'));
// console.log(null + 2);
// NaN => Not a Number
// console.log(undefined + 3); terminal: NaN
// let a;
// let b = null;
// console.log(a + 1);
// console.log(b + 1);
// let b = 5;
// console.log(b === b); terminal: true
// console.log({b} === {b}); terminal: false
//  Symbols => unique id
// let a = Symbol("text"); 
// let b = Symbol("text");

// console.log(a == b); terminal: false
// console.log(a === b); terminal: false
// Object => array, obj, function 
// let ar = []; // index orqali chaqiradi, index 0 dan boshlanadi
// let b = [`strong, smart, attractive, responsible`]
// let a = [`Ulug'bek is ${b}`, `and very confident!`, `he is 18 years old`, 18]
// console.log(a[2]);
// let obj = {};
// let a = {mindset: `smart`, apperaence: `attractive`, personality: `kind`}
// let b = [`very ${a.mindset}`, `not ${a.personality}`, `almost ${a.apperaence}`]
// console.log(b[0]);
// let func = ()=>{} = function test(){};
// let a = {mindset: `smart`, apperaence: `attractive`, personality: `kind`}
// let b = [`very ${a.mindset}`, `not ${a.personality}`, `almost ${a.apperaence}`]
// function test(){console.log(b[0]);};
// test();
// ======================================Datatypes end========================================










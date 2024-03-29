// =============Type Conversions===========
// let a = 1;
// let b = "1";
// console.log(a + b);
// let a = 1;
// let b = "1";
// console.log(a + +b);
// let a = "Ulug'bek"
// let b = " Karimov"
// console.log(a + b);
// let a = "2004"
// console.log(+a);
// let a = "2004s"
// console.log(+a); terminal: NaN
// let a = "2004s";
// console.log(isNaN(a)); terminal: true
// let b = "2004";
// console.log(isNaN(b)); terminal: false
// let a = "50";
// console.log(Number(a)); terminal: 50 in Number
// let a = "50";
// console.log(parseInt(a)); terminal: 50 in Number
// let a = "50";
// console.log(parseFloat(a)); terminal: 50 in Number
// Number(), parseInt(), parseFloat() => boshqa turdagi data typlarni numberga o'zgartiradi.
// Bularning farqi shundaki, parseInt() bizga sonning faqat yaxlit qsmini olib beradi, kars qisimni ciqarmaydi.
// Number() bilan parseFloat() esa, ikkolovi deyarlik bir xil, lekn parseFloat() raqaminig qayerida xarf bulsa ushetigaca olib beradi.
// let a = "200.20";
// console.log(Number(a)); terminal: 200.20
// let b = "200.20";
// console.log(parseInt(b)); terminal: 200
// let c = "200.20";
// console.log(parseFloat(c)); terminal: 200.20
// let a = "30d";
// console.log(Number(a)); terminal: NaN
// let b = "30d";
// console.log(parseFloat(b)); terminal: 30
// ==================================End type conversion
// ================================comparison
// true => !0, !undefined, !null
// console.log(false == 0); terminal: true
// console.log(true == 1); terminal: true
// console.log(null == 0); terminal: false
// console.log(null == false); terminal: false
// console.log(null == undefined); terminal: true
// console.log(undefined == false); terminal: false
// console.log(true == "1"); terminal: true
// console.log(true == "a"); terminal: false
// console.log(true == "2"); terminal: false
// console.log(true == "0"); terminal: false. lekn if else da true chiqadi
// console.log(true == "webbrain"); terminal: false
// console.log(false == "webbrain"); terminal: false
// =========================Basic Operators, math=================
// Addition +
// Subtraction -
// Multiplication *
// Division / 
// Remainder %
// Exponentiation **
// Brackets ()
// Incement ++
// Decrement --
// Equality =,==, ===
// Obrivations +=, -=, /=, *=
// let a = 1; => bu misol, single threaded tshunchasiga to'g'ri keladi
// console.log(a++); terminal: 1
// console.log(a); terminal: 2
// a++ => a = a + 1
// a-- => a = a - 1
// ====================Obrivations============
// let a = 100;
// a = a + 10; terminal: 110
// a += 10; terminal: 110
// a -= 10;terminal: 90
// a *= 10; terminal: 1000
// a /= 10; terminal: 10
// a %= 3; terminal: 1
// console.log(a);
// ==================comparision=============
// let a = 10;
// let b = 20;
// console.log(a > b); terminal: false
// let a = 10;
// let b = 20;
// console.log(a < b); terminal: true
// let a = 10;
// let b = 10;
// console.log(a >= b); terminal: true
// let a = 10;
// let b = 20;
// console.log(a == b); terminal: false
// let a = 10;
// let b = "10";
// console.log(a === b); terminal: false
// let a = "A"
// let b = "a"
// console.log(a == b); terminal: false
// let a = 1;
// let b = 1;
// console.log(a != b); terminal: false
// let a = 1;
// let b = 2;
// console.log(a !== b); terminal: true
// let a = 1;
// let b = "1";
// console.log(a !== b); terminal: true 
// ==========================Logical Operations===============
















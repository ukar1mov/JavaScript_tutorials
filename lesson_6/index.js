// min(2, 5) 
// min(3, -1)
// min(1, 1)


// pow(3, 2)
// pow(3, 3)
// pow(3, 100)


// const findLeast = (a, b)=>{
//     return(a < b)?console.log(a):console.log(b);
// }
// console.log(findLeast(3, -1));



// const calcPower = (a, b) => {
//     return(a ** b);
// }
// console.log(calcPower(5, 2));
// console.log(null>=0);
// console.log(null<=0);

// ========================Objects================
// {key, indicator, name : value}=> object

// let account = {name: `Ulug'bek`, surname:`Karimov`, wasBorn:`2004`};
// console.log(account);
// let newObj1 = {};
// let newObj2 = new Object();
// console.log(newObj1, newObj2);

// let account = {name: `Ulug'bek`, surname:`Karimov`, age: 18};
// console.log(account.surname);
// console.log(account[`name`]);


// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
//     foundede: 2020, 
//     "full name": "Webbrain IT Academy", 
//     0: 23222,
// };
// let key = "major";
// console.log(account.key);


// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
//     foundede: 2020, 
//     "full name": "Webbrain IT Academy", 
//     0: 23222,
// };
// let key = "major";
// console.log(account[key]);

// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
//     foundede: 2020, 
//     "full name": "Webbrain IT Academy", 
//     0: 23222,
// };
// let key = "major";
// console.log(account["founded"]);

// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
//     foundede: 2020, 
//     "full name": "Webbrain IT Academy", 
//     0: 23222,
// };
// let name = "major";
// console.log(account.name);
// console.log(account[name]);
// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
//     foundede: 2020, 
//     "full name": "Webbrain IT Academy", 
//     0: 23222,
// };
// let name = "major";
// console.log(account["name"]);
// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
// };

// account.name = "Karimov Ulug'bek"

// console.log(account.name);
// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
// };

// account.name = "Karimov Ulug'bek"
// account.born = 2004
// console.log(account);
// let account = {
//     name: "Webbrain Academy",
//     major: "Frontend, bunker",
//     name: "Parampam"
// };


// console.log(account.name);
// =============how to delete object 
// let account = {
//         name: "Webbrain Academy",
//         major: "Frontend, bunker",
//     };
//     account.founded = 2020;
//     delete account.major;
//     console.log(account);
    // ===============Object freeze
    // const account = {
    //     name: "WebBrain Academy",
    //     major: "Front-end",
    // };
    // Object.freeze(account);
    // account.founded = 2020;
    // account.name = "Salom"
    // delete account.major;
    // console.log(account);

    // const account = {
    //         name: "WebBrain Academy",
    //         major: "Front-end",
    //     };
    //     Object.seal(account);
    //     account.founded = 2020;
    //     account.name = "Salom"
    //     delete account.major;
    //     console.log(account);


//  const ac1 = {
//     name: "WebBrain Academy",
//     major: "Front-End development",
//     founded: 2020,
//  };

//  const ac2 = {
//     name: "WebBrain Academy",
//     major: "Front-End development",
//     founded: 2020,
//  };


//  console.log(ac1 === ac2);

// const ac1 = {
//     name: "WebBrain Academy",
//     major: "Front-End development",
//     founded: 2020,
//  };

//  const ac2 = structuredClone(ac1);


//  console.log(ac2);
// let name = "Webbrain Academy";
// let major = "Frontend";
// const ac1 = {
//     name,
//     major: major,
//     founded: 2020,
//  };

 


//  console.log(ac1);

// const ac1 = {
//     name: "Webbrain Academy",
//     major: "Frontend",
// };

// console.log("name" in ac1);

// const ac1 = {
//     name: "Webbrain Academy",
//     major: "Frontend",
// }

// const ac2 = {};

// ac1.name = "Parampam"

// Object.assign(ac2, ac1);
// console.log(ac1, ac2);

// =============================how to get value=========================
// const ac1 = {
//     name: "Webbrain Academy",
//     major: "Frontend",
//     students: 2000,
//     founded: 2020,
//     mantors: 5,
// };

// for(let i in ac1){
//     console.log(`${i}: ${ac1[i]}`);
// }





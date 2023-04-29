const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased() {
//   return tutorials.map(function(tutorial) {
//     return tutorial.split(' ').map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);

      
//     }).join(' ');
//   });
// }


// function titleCased() {
//   return tutorials.map((tutorial) => {
// let words = tutorial.split(' ')
// let capitalizedWords= words.map((word)=> {
//   return word.charAt(0).toUpperCase() + word.slice(1)

// })

// return capitalizedWords.join(' ')

//   })
// }


function titleCased() {
  return tutorials.map(function(tutorial){
    return tutorial.split('').map(function(word){
    return  word.charAt(0).toUpperCase().slice(1)
    })
  }).join('')
}

// const titleCased = () => {
//   return tutorials.map((tutorial)=>{
//     for (const tutorial of tutorials) {

//     }
//   })
// }



// const skiSchool = ["aki", "guadalupe", "lei", "aalam"];

// // const rollCall = []

// // for (const student of skiSchool) {
// //   rollCall.push(student + " pendekho")
// // }


// // console.log(rollCall)

// function studentRollCall(student) {
//   return student + " the skier";
// }

// // const rollCall = skiSchool.map(studentRollCall)

// const rollCall = skiSchool.map((student)=> student + " the skier")


// console.log(rollCall)

// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];



// // const activatedRobots = robots.map((robot)=>{
// //   return {...robot, modes: robot.modes * 2,
// //   isActivated:true,}
// // })

// // // const activatedRobots = robots.map((robot)=>{
// // //   return Object.assighn({}, robot,{
// // //     modes:robot.modes * 2,
// // //     isActivated : true,
// // //   })
// // // })

// // console.log(activatedRobots)


















































































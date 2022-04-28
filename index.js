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

const titleCased = () => {
  return tutorials.map((element) => {
    const wordArray = element.split(" ")
    const capWordArray = wordArray.map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
    const joinWords = capWordArray.join(" ")
    return joinWords;
  });
};
console.log(titleCased())








// BELOW IS SOLUTION POSTED
// const titleCased = () => {
//   return tutorials.map((line) => {
//     const tokens = line.split(" ");
//     const capitalizedTokens = tokens.map((token) =>token.charAt(0).toUpperCase() + token.slice(1));
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };

// ## code below turns the first letter of string to Cap ##
// const myStr = "this is a sample string. hi there!"
// function doCap(inputString){
//     const myArray = inputString.split(" ")
//     console.log(myArray)
//     const capString = myArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// return capString.join(" ")
// }
// console.log(doCap(myStr));

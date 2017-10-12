 //given a string, write a function to check if it is a permutation of a palindrome.
palindrome = (string) => { 
    let result = document.querySelector('.answer-field').innerHTML;
    //console.log(result);
    //split string into array. Use map to convert all letters to lowercase.
let arr = string.split("").map((letter) => {
    return letter.toLowerCase();
  });
  //loop through array, and use splice to get rid of any element that is a space. 
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === " ") {
      arr.splice(k, 1);
    } 
  }
  //initialize a new object.
  let letterObj = {};
  //loop through the array of letters. set each letter as a key and it value as the incidence
  //of the occurence of each letter by incrementing the value up every time the letter appears
  for (let i = 0; i < arr.length; i++) {
    if (letterObj[arr[i]] === undefined) {
      letterObj[arr[i]] = 1;
    } else {
      letterObj[arr[i]]++;
    }
  }
  //create a new array of all the values that represent the incidence of each letter.
  let numArr = Object.values(letterObj);
  //initialize two variables.
  let isEven = 0;
  let isOdd = 0;
  //increment the appropriate variable for whether a letter appears and even or odd amount of times. 
   for (let j = 0; j < numArr.length; j++) {
     if (numArr[j] % 2 === 0) {
       isEven++;
     } else {
       isOdd++;
     }
  }
   //check whether the original string (minus the whitespace) has an even or odd number of letters. if it's an even number, there can't be any letters that appear an odd number of times (isOdd should be 0). 
   if (arr.length % 2 === 0) {
     if (isOdd > 0) {
        document.querySelector('.answer-field').innerHTML = `"${string}" is a permutation that cannot be a palindrome`;
     } else {
        document.querySelector('.answer-field').innerHTML =  `"${string}" is a permutation that can be a palindrome`;
     }
  //if it's the string has an odd number of letters, there has to be only one letter that appears an odd number of times AND all the rest of the letters HAVE to appear an even number of times. 
   } else if ((arr.length % 2 !== 0) && (arr.length !== 1)) {
     if ((isOdd % 2 !== 0) && (isEven === numArr.length - 1)) {
        document.querySelector('.answer-field').innerHTML = `"${string}" is a permutation that can be a palindrome`;
         console.log('hello world')
         document.querySelector('.answer-field').innerHTML = `"${string}" is a permutation that can be a palindrome`;
     } else {
        document.querySelector('.answer-field').innerHTML =  `"${string}" is a permutation that cannot be a palindrome`;
     }
   } else if (arr.length === 1) {
    document.querySelector('.answer-field').innerHTML = `"${string}" is a permutation that can be a palindrome`;
   }
}

const submit = document.querySelector('#submit');

submit.addEventListener('click', function() {
    let answer = document.getElementById("answer").value;
    console.log(answer);
    palindrome(answer);    
});




  

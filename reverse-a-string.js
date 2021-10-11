

function reverseString (reverseMe) {
  let reversedString = ""
  for(let i = reverseMe.length-1; i>=0; i--) {
    reversedString += reverseMe[i];
  }
  return reversedString;
}

console.log(reverseString("Julia"));
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.     
*/

function getCount(str) {
  let vowelsCount = 0;
  let inStrings = str.split('');
    for (let elem of inStrings) {
    if ( elem == 'a' || elem == 'e'|| elem == 'i'|| elem == 'o'|| elem == 'u' ) {
      vowelsCount++;
    }
   
    console.log(inStrings);
    console.log(vowelsCount);
   
} return vowelsCount
}
getCount('hi my names') 
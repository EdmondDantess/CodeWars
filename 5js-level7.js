// In this Kata, you will be given a string and your task will be to return a list of
//  ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s) {
    let uppercase;
    let lowercase;
    let nums;
    let specsymb;
    let regexpUp = /[A-Z]/g;
    let regexpLow = /[a-z]/g;
    let regexpNums = /[0-9]/g;
    let regexpSpec = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    uppercase = s.match(regexpUp).length.toString();
    lowercase = s.match(regexpLow).length.toString();
    nums = s.match(regexpNums).length.toString();
    specsymb = s.match(regexpSpec).length.toString();
    let massiv = [] ;
    massiv.push(uppercase);
    massiv.push(lowercase);
    massiv.push(nums);
    massiv.push(specsymb);

   for (let i=0; i<massiv.length; i++) {
      massiv[i] = Number(massiv[i]);
   }
       return massiv
}

   console.log(solve("*'&ABCDabcde12345"))
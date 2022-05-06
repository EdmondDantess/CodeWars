/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.  */

function highAndLow(numbers) {
  let arrNum = numbers.split(' ')
  let iMax = 0;
  let iMin = 0;
  for (let el of arrNum) {
    if (el == Math.max(...arrNum)) {
      iMax = Math.max(...arrNum).toString()
    }
    if (el == Math.min(...arrNum)) {
      iMin = Math.min(...arrNum).toString()
    }
  }
  const res = iMax +" "+ iMin ;
  const ires = res;
  console.log(ires);
  console.log(typeof ires);
  return ires
  
 
}

highAndLow('5 4 -7 6 2 -8');

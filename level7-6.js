// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.split("");
  let i = 1;
  while (i < arr.length) {
    arr.splice(
      i,
      1,
      "-" + arr[i].toUpperCase() + arr[i].repeat(i).toLowerCase()
    );
    i++;
  }
  let firsLetter = arr[0].toUpperCase();
  arr.shift();
  arr.unshift(firsLetter);
  return arr.join("");
}

console.log(accum("rqasdSADf"));

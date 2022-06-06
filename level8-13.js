// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  arr = str.split(" ");
  lastWord = arr.pop();
  arr.unshift(lastWord);
  return arr.join(" ");
}

console.log(nameShuffler("john McClane"));

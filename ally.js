let correct = 0;
let playerOneRank = "";

let quiz1 = prompt("Whose last words were 'I can\'t breathe'?");
let quiz2 = prompt("Whose murder in Sanford, FL sparked a national protest?");
let quiz3 = prompt("Whose death was the catalyst for the BLM movement?");
let quiz4 = prompt("Who was murdered by a police officer on the BART train station?");
let quiz5 = prompt("Who was murdered by an officer after having his neck kneeled upon for 8:46?");

if (quiz1.toUpperCase() === "ERIC GARNER") {
  // console.log("That's right!");
  correct += 1;
} else {
  console.log("That is incorrect.");
}

if (quiz2.toUpperCase() === "TRAYVON MARTIN") {
  // console.log("That's right!");
  correct += 1;
} else {
  console.log("That is incorrect.");
}

if (quiz3.toUpperCase() === "MICHAEL BROWN") {
  // console.log("That's right!");
  correct += 1;
} else {
  console.log("That is incorrect.");
}

if (quiz4.toUpperCase() === "OSCAR GRANT") {
  // console.log("That's right!");
  correct += 1;
} else {
  console.log("That is incorrect.");
}

if (quiz5.toUpperCase() === "GEORGE FLOYD") {
  // console.log("That's right!");
  correct += 1;
} else {
  console.log("That is incorrect.");
}

if (correct === 5) {
  playerOneRank = "Gold";
} else if (correct === 4 || correct === 3) {
  playerOneRank = "Silver";
} else if (correct === 2 || correct === 1) {
  playerOneRank = "Bronze";
} else {
  playerOneRank = "No crown";
}
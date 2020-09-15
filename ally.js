let correct = 0;
let playerOneRank = "";

// let quiz1 = prompt("Whose last words were 'I can\'t breathe'?");
// let quiz2 = prompt("Whose murder in Sanford, FL sparked a national protest?");
// let quiz3 = prompt("Whose death was the catalyst for the BLM movement?");
// let quiz4 = prompt("Who was murdered by a police officer on the BART train station?");
// let quiz5 = prompt("Who was murdered by an officer after having his neck kneeled upon for 8:46?");


let quiz = [
  ["Whose last words were 'I can\'t breathe'?", "ERIC GARNER"],
  ["Whose murder in Sanford, FL sparked a national protest?", "TRAYVON MARTIN"],
  ["Whose death was the catalyst for the BLM movement?", "MICHAEL BROWN"],
  ["Who was murdered by a police officer on the BART train station?", "OSCAR GRANT"],
  ["Who was murdered by an officer after having his neck kneeled upon for 8:46?", "GEORGE FLOYD"],
  ["Who died in police custody after being pulled over for an alleged failure to signal?", "SANDRA BLAND"],
  ["Who was shot and killed by police while playing video games in the house with their nephew?", "ATATIANNA JEFFERSON"],
  ["Who was shot 5 times by police while sleeping in their apartment?", "BREONNA TAYLOR"],
  ["Who was killed by police while walking home?", "ELIJAH MCCLAIN"],
  ["What child was killed by police for playing with a toy gun in the park?", "TAMIR RICE"],
  ["Who was killed while in police custody and abused so badly that their spinal cord was severed?", "Freddie Gray"],
  ["Who was killed by a police officer in Sacramento, CA when the officer alledged that the victum had a gun, when in fact, it was a cell phone?", "STEPHON CLARK"],
  ["Who was the person who was killed by a police officer while eating ice cream in his own apartment?", "BOTHAM JEAN"],
  ["After informing a police officer in Minnesota that he was carrying a legal firearm, this person was shot and killed while sitting in the car with his girlfriend and child.", "PHILANDO CASTILLE"],
  ["Who was shot six times after being confronted by police officers for selling CD's and DVD's in Baton Rouge, LA? ", "ALTON STERLING"],
  ["Who was shot 16 times in Chicago for alledgedly approaching a police officer with a knife?", "LAQUAN MCDONALD"],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""]
];

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

let message = `<h1>You got ${correct} out of 5 questions correct.</h1> 

<h1>Crown earned:  ${playerOneRank}.</h1>`;

document.querySelector('h2').innerHTML = message;


// Potential features of site may include web articles:
// https://www.cbsnews.com/news/say-their-names-list-people-injured-killed-police-officer-involved-incidents/

// https://interactive.aljazeera.com/aje/2020/know-their-names/index.html

// End of Articles...

//Utilization of gifs for wrong answers
let correct = 0;
let wrong = 0;
let playerOneRank = "";

let quiz = [
  {question: "Whose last words were 'I can\'t breathe'?", answer: "ERIC GARNER"},
  {question: "Whose murder in Sanford, FL sparked a national protest?", answer: "TRAYVON MARTIN"},
  {question: "Whose death was the catalyst for the BLM movement?", answer: "MICHAEL BROWN"},
  {question: "Who was murdered by a police officer on the BART train station?", answer: "OSCAR GRANT"},
  {question: "Who was murdered by an officer after having his neck kneeled upon for 8:46?", answer: "GEORGE FLOYD"},
  {question: "Who died in police custody after being pulled over for an alleged failure to signal?", answer: "SANDRA BLAND"}
  // {question: "Who was shot and killed by police while playing video games in the house with their nephew?", answer: "ATATIANNA JEFFERSON"},
  // {question: "Who was shot 6 times by police while sleeping in their apartment?", answer: "BREONNA TAYLOR"},
  // {question: "Who was killed by police in 2019 while walking home when someone called 911, saying he 'looked sketchy'?", answer: "ELIJAH MCCLAIN"},
  // {question: "What child was killed by police for playing with a toy gun in the park?", answer: "TAMIR RICE"},
  // {question: "Who was killed while in police custody and abused so badly that their spinal cord was severed?", answer: "FREDDIE GRAY"},
  // {question: "Who was killed by a police officer in Sacramento, CA when the officer alledged that the victum had a gun, when in fact, it was a cell phone?", answer: "STEPHON CLARK"},
  // {question: "Who was the person who was killed by a police officer while eating ice cream in his own apartment?", answer: "BOTHAM JEAN"},
  // {question: "After informing a police officer in Minnesota that he was carrying a legal firearm, this person was shot and killed while sitting in the car with his girlfriend and child.", answer: "PHILANDO CASTILLE"},
  // {question: "Who was shot six times after being confronted by police officers for selling CD's and DVD's in Baton Rouge, LA?", answer: "ALTON STERLING"},
  // {question: "Who was shot 16 times in Chicago for alledgedly approaching a police officer with a knife?", answer: "LAQUAN MCDONALD"},
  // {question: "Who was killed by police while in bed next to his 9 month pregnant fiancé after 4am?", answer: "FRED HAMPTON"},
  // {question: "Who was shot in the back of the head by a police officer while riding unarmed in the front passenger's seat of a friend's car at 15 years old?", answer: "JORDAN EDWARDS"},
  // {question: "What unarmed person was shot and killed in September 2016 in Tulsa, Oklahoma while standing next to his vehicle in the middle of the road?", answer: "TERENCE CRUTCHER"},
  // {question: "Who was shot and killed by police on the morning before his wedding in NYC?", answer: "SEAN BELL"},
  // {question: "Who was killed by New York City police officers when they fired 41 shots, (he was struck 19 times) at the age of 23?", answer: "AMADOU DIALLO"},
  // {question: "What individual was shot and killed by police because they fell asleep in a Wendy's drive-thru?", answer: "RAYSHARD BROOKS"},
  // {question: "Who was killed when his brother called for help, because his brother was having a mental health episode?", answer: "DANIEL PRUDE"},
  // {question: "Who was killed by Baltimore County police in 2016 after a 6-hour standoff, where she was shot 5 times?", answer: "KORRYN GAINES"},
  // {question: "What 22 year old was shot and killed by a police officer while inside a Walmart, after a false report that the victim waved a gun at patrons in the store?", answer: "JOHN CRAWFORD"},
  // {question: "What 22-year-old Black American was fatally shot as a bystander in Chicago, Illinois by an off-duty Chicago police detective, on March 21, 2012?", answer: "REKIA BOYD"}
];

let numOfQuestions = quiz.length;

//THE CALCULATESCORE FUNCTION DETERMINES THE PERCENTAGE OF QUESTIONS THE PLAYER GOT CORRECT:

const calculateScore = (totalCorrect, totalQuestions) => {
  let finalScore = totalCorrect / totalQuestions;
  return finalScore;
};

calculateScore(correct, numOfQuestions);
//create logic to iterate through questions in the keys.

for (let i = 0; i < quiz.length; i++) {
  let response = prompt(quiz[i].question);
  if (response.toUpperCase() === quiz[i].answer) {
    correct += 1;
  }else {
    wrong += 1;
    //console log for checking accuracy of answerd questions:
    console.log(`Sorry. The correct answer to the question "${quiz[i].question}" is: ${quiz[i].answer}. You submitted: ${response}`);
    console.log(calculateScore(correct, numOfQuestions));
  }
}

//Add logic to ask the questions randomly without repeating the questions:

// const askQuestions = () => {

// };

// askQuestions();

//THIS LOGIC DETERMINES THE RANKING SYSTEM OF EACH PLAYER:

if (calculateScore === 100) {
  playerOneRank = "Platinum 💍";
}else if (calculateScore >= 90) {
  playerOneRank = "Gold 🥇";
}else if (calculateScore >= 80) {
  playerOneRank = "Silver 🥈";
} else if (calculateScore >= 70) {
  playerOneRank = "Bronze 🥉";
} else {
  playerOneRank = "No crown 😔";
}

//THIS TEMPORARILY WRITES THE QUIZ OUTCOME TO THE DOM

let message = `<h1>You got ${correct} out of ${numOfQuestions} questions correct. You got ${wrong} questions incorrect.</h1> 

<h1>Crown earned: ${playerOneRank}.</h1>`;

document.querySelector('h2').innerHTML = message;















// Potential features of site may include web articles:
// https://www.cbsnews.com/news/say-their-names-list-people-injured-killed-police-officer-involved-incidents/

// https://interactive.aljazeera.com/aje/2020/know-their-names/index.html

//https://www.reneeater.com/on-monuments-blog/tag/list+of+unarmed+black+people+killed+by+police

//https://www.nytimes.com/article/who-was-elijah-mcclain.html

//https://nodejs.org/en/black-lives-matter/

// End of Articles...

//Utilization of gifs for wrong answers



//Old quiz format:

// let quiz1 = prompt("Whose last words were 'I can\'t breathe'?");
// let quiz2 = prompt("Whose murder in Sanford, FL sparked a national protest?");
// let quiz3 = prompt("Whose death was the catalyst for the BLM movement?");
// let quiz4 = prompt("Who was murdered by a police officer on the BART train station?");
// let quiz5 = prompt("Who was murdered by an officer after having his neck kneeled upon for 8:46?");


// let quiz = [
//   ["Whose last words were 'I can\'t breathe'?", "ERIC GARNER"],
//   ["Whose murder in Sanford, FL sparked a national protest?", "TRAYVON MARTIN"],
//   ["Whose death was the catalyst for the BLM movement?", "MICHAEL BROWN"],
//   ["Who was murdered by a police officer on the BART train station?", "OSCAR GRANT"],
//   ["Who was murdered by an officer after having his neck kneeled upon for 8:46?", "GEORGE FLOYD"],
//   ["Who died in police custody after being pulled over for an alleged failure to signal?", "SANDRA BLAND"],
//   ["Who was shot and killed by police while playing video games in the house with their nephew?", "ATATIANNA JEFFERSON"],
//   ["Who was shot 6 times by police while sleeping in their apartment?", "BREONNA TAYLOR"],
//   ["Who was killed by police while walking home?", "ELIJAH MCCLAIN"],
//   ["What child was killed by police for playing with a toy gun in the park?", "TAMIR RICE"],
//   ["Who was killed while in police custody and abused so badly that their spinal cord was severed?", "FREDDIE GRAY"],
//   ["Who was killed by a police officer in Sacramento, CA when the officer alledged that the victum had a gun, when in fact, it was a cell phone?", "STEPHON CLARK"],
//   ["Who was the person who was killed by a police officer while eating ice cream in his own apartment?", "BOTHAM JEAN"],
//   ["After informing a police officer in Minnesota that he was carrying a legal firearm, this person was shot and killed while sitting in the car with his girlfriend and child.", "PHILANDO CASTILLE"],
//   ["Who was shot six times after being confronted by police officers for selling CD's and DVD's in Baton Rouge, LA? ", "ALTON STERLING"],
//   ["Who was shot 16 times in Chicago for alledgedly approaching a police officer with a knife?", "LAQUAN MCDONALD"],
//   ["Who was killed by police while in bed next to his 9 month pregnant fiancé after 4am?", "FRED HAMPTON"],
//   ["Who was shot in the back of the head by a police officer while riding unarmed in the front passenger's seat of a friend's car at 15 years old?", "JORDAN EDWARDS"],
//   ["What unarmed person was shot and killed in September 2016 in Tulsa, Oklahoma while standing next to his vehicle in the middle of the road?", "TERENCE CRUTCHER"],
//   ["Who was shot and killed by police on the morning before his wedding in NYC?", "SEAN BELL"],
//   ["Who was killed by New York City police officers when they fired 41 shots, (he was struck 19 times) at the age of 23?", "AMADOU DIALLO"],
//   ["What individual was shot and killed by police because they fell asleep in a Wendy's drive-thru?", "RAYSHARD BROOKS"],
//   ["Who was killed when his brother called for help, because his brother was having a mental health episode?", "DANIEL PRUDE"],
//   ["Who was killed by Baltimore County police in 2016 after a 6-hour standoff, where she was shot 5 times?", "KORRYN GAINES"],
//   ["What 22 year old was shot and killed by a police officer while inside a Walmart, after a false report that the victim waved a gun at patrons in the store?", "JOHN CRAWFORD"],
//   ["What 22-year-old Black American was fatally shot as a bystander in Chicago, Illinois by an off-duty Chicago police detective, on March 21, 2012?", "REKIA BOYD"],
// ];

// if (quiz1.toUpperCase() === "ERIC GARNER") {
//   // console.log("That's right!");
//   correct += 1;
// } else {
//   console.log("That is incorrect.");
// }

// if (quiz2.toUpperCase() === "TRAYVON MARTIN") {
//   // console.log("That's right!");
//   correct += 1;
// } else {
//   console.log("That is incorrect.");
// }

// if (quiz3.toUpperCase() === "MICHAEL BROWN") {
//   // console.log("That's right!");
//   correct += 1;
// } else {
//   console.log("That is incorrect.");
// }

// if (quiz4.toUpperCase() === "OSCAR GRANT") {
//   // console.log("That's right!");
//   correct += 1;
// } else {
//   console.log("That is incorrect.");
// }

// if (quiz5.toUpperCase() === "GEORGE FLOYD") {
//   // console.log("That's right!");
//   correct += 1;
// } else {
//   console.log("That is incorrect.");
// }

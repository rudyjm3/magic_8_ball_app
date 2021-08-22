function responses() {/*
10 affirmative answers
It is Certain.
It is decidedly so.
Without a doubt.
Yes definitely.
You may rely on it.
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

5 non-committal answers
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

5 negative answers
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/
}
// Stops Form resubmission alert from coming up when the page is refreshed in Chrome browser
if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
};
//GLOBAL VARIABLES
const fortuneContainer = document.getElementById('fortune-container');
let questionContainer = document.createElement('div');
questionContainer.id = 'question-display';
//.append accepts Node Objects and DOMStrings
fortuneContainer.appendChild(questionContainer);
let fortuneReply = document.createElement('div');
fortuneReply.id = 'fortune';
fortuneContainer.appendChild(fortuneReply);
let messageText = document.getElementById("message"); 


function shake(){
  let ball = document.getElementById("eightball-front");
  let question = document.getElementById("user-input").value;
  //let messageText = document.getElementById("message"); 
console.log('I have been clicked!');

  //Remove previous message if it exists
  if(messageText != null){
    messageText.parentNode.removeChild(messageText);
  };

//Make the ball shake by adding the css class
  ball.classList.add("shake");
  //ballBack.classList.add("shake");

  document.getElementById('question-display').innerHTML = `<p class="q-title">Your Question:<br><span class="question">${question}</span></p>`;
  console.log(question);

  document.getElementById('user-input').value = "";
//Remove the shake class after it stops shaking
  setTimeout(function(){ ball.classList.remove("shake"); }, 1000);
//call the fortune function to get your fortune only after 2sec
  setTimeout(function(){ getFortune(); }, 1500);
}

//generate the fortune for the ball
function getFortune(){
//array of fortunes
  let fortunes = ['It is Certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes.', 'Signs point to yes.']

//get a random fortune message
  let fortuneRandom = fortunes[Math.floor(Math.random()*fortunes.length)];

 //display the fortune on the page
  let parent = document.getElementById("fortune");
  let newMessage = document.createElement("div");
  newMessage.id = 'message';
  
  //let title = document.getElementsByClassName("fortune-title")[0];
  //let titleUnderline = document.getElementsByClassName("underline")[0];

  newMessage = fortuneRandom;
  console.log(newMessage);
  console.log(fortuneRandom);
  //parent.appendChild(newMessage);
  //title.classList.remove("hide");
  //titleUnderline.classList.remove("hide");
  
  parent.innerHTML = `
   <h2 class="fortune-title">Your Fortune</h2>
   <hr class="underline">
   <p id="message">${newMessage}</p>
   `;
}
 function askAgain(){
   let userInput = document.getElementById('user-input');
   document.getElementById('user-input').value = "";
   if(messageText != null){
     messageText.parentNode.removeChild(messageText);

   }
 }

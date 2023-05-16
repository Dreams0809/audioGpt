const texts = document.querySelector('.texts');

//Importing the Speech Interface, the regular and webkit version 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Setting a variable to "recognition"

const recognition = new window.SpeechRecognition();
recognition.interimResults= true; 

let p = document.createElement('p');


recognition.addEventListener('result',(e) => {
  const text = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join("");

  p.innerText = text
  
  texts.appendChild(p);
  
  console.log(text);
  
  

})

recognition.start();

//Figure out a way to ask question, 
//when i say a keyword moves on to next question

//Adds an event listener to attach to a event with anew fucntion
recognition.addEventListener('results',(e) => {
  
  //putting text together using an array, use the join method to join them together. Use the map method 
  
  const text = Array.from(e.results)
    .map(result => result[0])  
    .map(result => result.transcript)
    .join('');
  
  p.innerText = text;
  
  console.log(text);
})

recognition.start();


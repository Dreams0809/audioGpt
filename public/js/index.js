const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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
//

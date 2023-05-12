const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults= true; 

let p = document.createElement('p');

recognition.addEventListener('results',(e) => {
  console.log(e);
})

recognition.start();
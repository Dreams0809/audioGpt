const texts = document.querySelector('.texts');

//Importing the Speech Interface, the regular and webkit version 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Setting a variable to "recognition"

const recognition = new window.SpeechRecognition();
recognition.interimResults= true; 

let p = document.createElement('p');

//Adds an event listener to attach to a event with anew fucntion
recognition.addEventListener('results',(e) => {
  
  //putting text together using an array, use the join method to join them together. Use the map method 
  
  const text = Array.from(e.results)
    .map(result => result[0])  
    .map(result => result.transcript)
    .join('');
    
    //The inner text of the paragraph will be equal to text 
 
  p.innerText = text;
  texts.appendChild(p);
  
  //If the event session results "isFinal = false" we need to make a new paragraph, which makes it true 
  
  if(e.results[0].isFinal){
    if(text.includes('Hello') || text.includes('Hi')){
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Hi, how was your day today';
      texts.appendChild(p);
    } 
  }
  
  if(e.results[0].isfinal){
    p = document.createElement('p');
    p.classList.add('replay');
    p.innerText = 'Did you learn anything new today?';
    texts.appendChild(p);
  }
  
  
  if(e.results[0].isfinal){
    p = document.createElement('p');
    p.classList.add('replay');
    p.innerText = 'What are your goals for the week ?';
    texts.appendChild(p);
  }
  
  
  if(e.results[0].isfinal){
    p = document.createElement('p')
    p.classList.add('replay')
    p.innerText = 'Did you read or workout today ?'
    texts.appendChild(p);
  }
  
  
    if(e.results[0].isfinal){
    p = document.createElement('p')
    p.classList.add('replay')
    p.innerText = 'How can you be a better version of yourself tomorrow? '
    texts.appendChild(p);
  }
  
   p = docuemnt.createElement('p');
  
  
  
  console.log(text);
})

recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();

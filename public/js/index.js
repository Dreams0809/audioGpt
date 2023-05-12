var speechRecognition = window.speechRecognition

var recognition = new speechRecognition()

var textbox = document.querySelector("#textbox")

var instructions = document.querySelector("#instructions")

var content = ''

recognition.continuous = true


// recognition is started 

recognition.onstart = function (){
    instructions.text("Voice Recognition is on")
}

recognition.onspeechend = function () {
    instructions.text("No Activity")
}

recognition.onerror = function (){
    instructions.text("Try Again")
}

recognition.onresult = function (event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript

    content += transcript

    textbox.val(content)
}


document.querySelector("#start-btn").click(function (event) {
    if (content.length) {
        content += ''
    }

    recognition.start()
})

/*
    Aim create random life coach messages
    Ask user how they are feeling
        reply accordingly (feeling sad: 'sorry to hear that..')
    Return random message combining two actions, serious and silly
    e.g. You should [quit your job] and [join a mariachi band]
*/

const message = {

    arrSeriousActions: [
        'quit your job',
        'leave your partner',
        'stop coasting',
        'run away',
        'pick yourself up by the bootstraps',
        'stop people pleasing',
        'stop wasting time',
    ],

    arrSillyActions: [
        'join a mariachi band',
        'become a stripper in Leeds',
        'become a door-to-door door salesman',
        'make the worlds largest bar of soap',
        'go take mushrooms in Oslo',
        'become a hamster hairdresser',

    ],

    genMessage () {
        const seriousAction = this.arrSeriousActions[Math.floor(Math.random() * this.arrSeriousActions.length)];
        const sillyAction = this.arrSillyActions[Math.floor(Math.random() * this.arrSillyActions.length)];
        return `You should ${seriousAction} and ${sillyAction}.`;
    },

    giveAdvice (event) {
        let advice = '';
        if (event.target === happyButton){
            advice = `That's great! ${message.genMessage()}`;
            
        } else if (event.target === neutralButton) {
            advice = "Ok, well.. " + message.genMessage();
           
        } else if (event.target === sadButton) {
            advice = "Sorry to hear that... " + message.genMessage();
            
        } else {
            advice = 'I dont understand, and I cant help, sorry.';
        }
        document.getElementById('life-coach').innerHTML = `<h1> ${advice} </h1>`
    }

}


let happyButton = document.getElementById('happy');
let neutralButton = document.getElementById('neutral');
let sadButton = document.getElementById('sad');

// Add event listeners
happyButton.addEventListener('click', message.giveAdvice);
neutralButton.addEventListener('click', message.giveAdvice);
sadButton.addEventListener('click', message.giveAdvice);


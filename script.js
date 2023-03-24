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

    /*
    getMood () {
        const mood = prompt('How are you feeling? (happy, neutral or sad)');
    },
    */

    giveAdvice () {
        const seriousAction = this.arrSeriousActions[Math.floor(Math.random() * this.arrSeriousActions.length)];
        const sillyAction = this.arrSillyActions[Math.floor(Math.random() * this.arrSillyActions.length)];
        return `You should ${seriousAction} and ${sillyAction}.`;
    },

}


const generateMessage = event => {
    let advice = '';
    if (event.target === happyButton){
        advice = "That's great!";
        document.getElementById('life-coach').innerHTML = `<h1> ${advice} ${message.giveAdvice()}</h1>`;
    } else if (event.target === neutralButton) {
        advice = "Ok, well..";
        document.getElementById('life-coach').innerHTML = `<h1> ${advice} ${message.giveAdvice()}</h1>`;
    } else if (event.target === sadButton) {
        advice = "Sorry to hear that..."
        document.getElementById('life-coach').innerHTML = `<h1> ${advice} ${message.giveAdvice()}</h1>`;
    } else {
        advice = 'I dont understand, and I cant help, sorry.';
    }

}


let happyButton = document.getElementById('happy');
let neutralButton = document.getElementById('neutral');
let sadButton = document.getElementById('sad');

happyButton.addEventListener('click', generateMessage);
neutralButton.addEventListener('click', generateMessage);
sadButton.addEventListener('click', generateMessage);





//console.log(message.giveAdvice());
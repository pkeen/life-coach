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


console.log(message.giveAdvice());
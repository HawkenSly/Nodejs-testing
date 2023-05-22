const EventEmitter = require('events');
// turns celebrity into a subject
const celebrity = new EventEmitter();

// Becomes an observer (listener) for subject "celebrity"
// First argument is the event string, second argument is a function. In this case, we're using an arrow function to automatically
//run the following code.
celebrity.on('race win', () => {
    console.log('Congratulations! You are the best!');
});


// Becomes a second observer (listener) for subject "celebrity"
celebrity.on('race win', () => {
    console.log('Boo! I should have won!');
});



process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})


//Emits event to observers/listeners
celebrity.emit('race win');
celebrity.emit('race loss');
celebrity.emit('race win');
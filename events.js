const EventEmitter = require('events');
// turns celebrity into a subject
const celebrity = new EventEmitter();

// Becomes an observer (listener) for subject "celebrity"
celebrity.on('race win', () => {
    console.log('Congratulations! You are the best!');
});


// Becomes a second observer (listener) for subject "celebrity"
celebrity.on('race win', () => {
    console.log('Boo! I should have won!');
});

//Emits event to observers/listeners
celebrity.emit('race win');
celebrity.emit('race loss');
celebrity.emit('race win');
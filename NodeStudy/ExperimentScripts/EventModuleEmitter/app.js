var events = require('events');

// core module: one function allows us to inherit certain things from objects built into node js or other objects
var util = require('util');

// want any person to inherit event emitters
var Person = function(name){
    this.name = name;
};

// we want Person to inherit something in this case the events.EventEmitter
// now all the people created has an eventImmiter or event listener
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(person => {
    person.on('speak', mssg => {
        console.log(`${person.name} said: ${mssg}`);
    });
});

// make james speak and pass some arguments
james.emit('speak', 'hey dudes');
mary.emit('speak', 'hey james');
ryu.emit('speak', 'i want a curry');




/*
// our own event emitter object now we can wire events to it
var myEmitter = new events.EventEmitter();

// when someEvent happens have a callback
myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

// to manually make an event happen/trigger/emit
// the first argument is the event name, the second argument are the ones to be passed into the function
myEmitter.emit('someEvent', 'the event was emitted');
*/
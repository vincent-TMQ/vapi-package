'use strict';

class HelloWorld {
    greet(name = "World") {
        return `Hello, ${name}!`;
    }
}

exports.HelloWorld = HelloWorld;

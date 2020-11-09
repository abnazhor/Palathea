const Sender = "./core/Sender.js";
const Listener = "./core/Listener.js";
const Interpreter = "./core/Interpreter.js";

module.exports = class Palathea {
    constructor(intents, dictionary, handlers) {
        this.intents = intents;
        this.dictionary = dictionary;
        this.handlers = handlers;

        if(!this.intents || !this.dictionary || !this.handlers) {
            throw new Error("Intents, dictionary and handlers must be declared.");
        }

        this.listener = new Listener();
        this.sender = new Sender(this.handlers);
        this.interpreter = new Interpreter(this.intents, this.dictionary, 0.5);
    }

    reply(input) {
        const fixedInput = this.listener.sanitize(input);
        const selectedIntent = this.interpreter.guess(fixedInput);
        const processedResponse = this.sender.process(selectedIntent);

        return processedResponse;
    }
}
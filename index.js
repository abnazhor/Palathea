import Sender from "./modules/Sender.js";
import Listener from "./modules/Listener.js";
import Interpreter from "./modules/Interpreter.js";

export default class Assistant {
    constructor(intents, dictionary) {
        this.intents = intents;
        this.dictionary = dictionary;
        this.handlers = handlers;

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
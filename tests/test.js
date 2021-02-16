const Assistant = require("../src/index"); 

const dictionary = require("./test_files/test_dictionary.json");
const handlers = require("./test_files/test_handlers");
const intents = require("./test_files/test_intents.json");

test("Initializes Assistant", () => {
    expect(typeof new Assistant(intents, dictionary, handlers)).toBe("object");
});

test("Check basic intent response", async () => {
    const palathea = new Assistant(intents, dictionary, handlers);
    expect(await palathea.reply("Hello")).toBe("Hello!")
});

test("Test basic handler response", async () => {
    const palathea = new Assistant(intents, dictionary, handlers);
    expect(await palathea.reply("What day is it?")).toBe("The clock is ticking right now");
});

test("Test basic handler response with changes and punctuation signs", async () => {
    const palathea = new Assistant(intents, dictionary, handlers);
    expect(typeof new Date(await palathea.reply("What date is it?"))).toStrictEqual("object");
});

test("Test response handling when there is no available response", async () => {
    const palathea = new Assistant(intents, dictionary, handlers);
    expect(await palathea.reply("922 283822 123hh i122")).toBe("Lo siento, creo que no lo he entendido, ¿Podrías repetirlo?");
});

test("Test basic handler response with changes and punctuation signs", async () => {
    const palathea = new Assistant(intents, dictionary, handlers);
    expect(await palathea.reply("HeLlO!!!!")).toBe("Hello!");
});
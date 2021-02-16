# Palathea
Palathea is a simple assistant for daily tasks. Built in Node.js and designed to be easy to use, implement and work with.

## Building, Testing and Installation

This is a Node.js module available through the GitHub registry.

Before installing, download and install Node.js, Node.js 12.0 or higher required. 

If this is a brand new project, make sure to create a `package.json` first with the `npm init` command.

Installation is done using the `npm install` command:

```bash
npm install @abnazhor/palathea
```

## Features

- Easy to use and implement
- Custom dictionaries, handlers and intents
- Very fast response times
- Uses JSON files to configure basic utilities

## Examples

```javascript
const Assistant = require("@abnazhor/palathea");

const dictionary = require("my_dictionary.json");
const handlers = require("my_handlers.json");
const intents = require("my_intents.json");

const palathea = new Assistant(intents, dictionary, handlers);

// Returns response as a string.
await palathea.reply("This is my phrase");
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
npm install
npm test
```

## License

[GNU GPLv3](https://github.com/abnazhor/Palathea/blob/main/LICENSE)
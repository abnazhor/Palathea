module.exports = class Sender {
  constructor(handlers) {
    this.handlers = handlers;
  }

  async process(input) {
    let response = "";

    if (input.intent.handler) {
      try {
        if (input.context) {
          response = await this.handlers[input.intent.handler](input.context);
        } else {
          response = await this.handlers[input.intent.handler]();
        }
      } catch (err) {
        response = "An error has occured";
      }
    } else if (input.intent.response) {
      response = input.intent.response;
    } else {
      throw new Error("Intent doesn't contain handler nor response properties");
    }

    return response;
  }
}

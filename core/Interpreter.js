export default class Interpreter {
  constructor(intents, dictionary, acceptanceRating) {
    this.intents = intents;
    this.acceptanceRating = acceptanceRating;
    this.dictionary = dictionary;
  }

  guess(input) {
    const failedIntent = {
      intent: {
        response: "Lo siento, creo que no lo he entendido, ¿Podrías repetirlo?",
      },
    };

    const ratedIntents = this.intents.map((el) => this.rateIntent(el, input));
    const filteredIntents = ratedIntents.filter(
      (el) => el.rating > this.acceptanceRating
    );
    const selectedIntent = filteredIntents.sort(
      (a, b) => b.rating - a.rating
    )[0];

    let resultantContext = [];

    if (selectedIntent.intent.context) {
      resultantContext = this.context(selectedIntent.intent, input);
    }

    const result = {
      intent: selectedIntent.intent,
      rating: selectedIntent.rating,
      context: resultantContext
    }

    return !result.intent ? failedIntent : result;
  }

  rateIntent(intent, input) {
    let rating = 0;

    for (const keywordSet of intent.keywords) {
      const coincidences = keywordSet.filter((el) => input.indexOf(el) !== -1)
        .length;

      let thisRating = coincidences / keywordSet.length + coincidences * 0.05;
      rating = thisRating > rating ? thisRating : rating;
    }

    if (intent.strict) {
      rating = rating !== 1 ? 0 : 1;
    }

    return {
      intent,
      rating,
    };
  }

  context(intent, input) {
    const fullInput = input.reduce(
      (str, currentValue) => str + " " + currentValue
    );

    const selectedDictionaries = this.dictionary.filter(
      (el) => intent.context.id.indexOf(el.id) !== -1
    );

    let context = [];

    for (const dictionary of selectedDictionaries) {
      const patterns = dictionary.pattern.filter((pattern) => new RegExp(pattern).test(fullInput));
      const searchValues = patterns.map(pattern => fullInput.match(new RegExp(pattern))[0]);

      context[dictionary.id] = {
        patterns,
        searchValues
      }
    }

    return context;
  }
}

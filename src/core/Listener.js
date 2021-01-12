const stringUtil = require("../utils/string.js");
module.exports = class Listener {
    sanitize(input) {
        const fixedInput = input.toString().toLowerCase();
        const replacedInput = stringUtil.allReplace(fixedInput).replace(/[\?\!\,\.]/g, "");
        const splittedInput = replacedInput.split(/ +/g);

        return splittedInput;
    }
}
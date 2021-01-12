const Assistant = require("../src/index");

test("Initializes Assistant", () => {
    expect(typeof new Assistant({},{},{})).toBe("object");
});
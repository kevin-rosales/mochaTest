const assert = require("chai").assert;
const sayHello = require("../app").sayHello;
const addNumbers = require("../app").addNumbers;
// const app = require("../app");

// Results
sayHelloResult = sayHello();
addNumbersResult = addNumbers(5, 5);

afterEach(function(done) {
  setTimeout(done, 30);
});

describe("App", function() {
  // sayHello function testing
  describe("sayHello()", () => {
    it("sayHello should return hello", function() {
      assert.equal(sayHelloResult, "Hello");
    });

    it("sayHello should return type string ", () => {
      assert.typeOf(sayHelloResult, "string");
    });
  });

  // addNumbers function testing
  describe("addNumbers()", () => {
    it("addNumbers should return value above 5 ", () => {
      assert.isAbove(addNumbersResult, 5);
    });

    it("addNumbers should return type number ", () => {
      assert.typeOf(addNumbersResult, "number");
    });
  });
});

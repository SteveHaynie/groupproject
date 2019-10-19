const assert = require("assert");
const { isEqual } = require("./utils.js");

describe("Testing isEqual", () => {
    it("should return a boolean", () => {
      assert(typeof isEqual(6,4) === "boolean");
      assert(typeof isEqual(0,0) === "boolean");
    });
  })

describe("Testing isEqual", () => {
    it("Should return true if number passed in is equal to b ", () => {
      assert(isEqual( 0, 0) === true);
    });
    it("Should return true if number passed in is equal to b ", () => {
        assert(isEqual( 100, 100) === true);
      });
      it("Should return true if number passed in is equal to b ", () => {
        assert(isEqual( 2, 10) === false);
      });
    })

    describe("Testing isEqual", () => {
    it("should throw if input is not a number", () => {
      assert.throws(() => {
        isEqual();
      })
      assert.throws(() => {
        isEqual("hello");
      })
      assert.throws(() => {
        isEqual(null);
      });
      assert.throws(() => {
        isEqual(undefined);
      });
    });
  })
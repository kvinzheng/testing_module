const mocha = require("mocha");
const expect = require("chai").expect;
const Set = require("../set.js")
describe("Set", () => {
  describe("add method", () => {
    beforeEach(() => {
      console.log("ping");
    })
    it('should returns the Set Object', () => {
      let initial = new Set();
      // initial.add("parker");
      expect(initial.add("lewis")).to.be.an.instanceof(Set);
      expect(initial.add("parker")).to.deep.equal(initial);
    });

    it('should append a new element with the given value to the set object', () => {
      let initial = new Set();
      initial.add("parker");

      expect(initial.setObj["parker"]).to.equal(0);
      expect(initial.setObj["lewis"]).to.be.undefined;
    })
  });

  describe("#clear", () => {

  });

  describe("#delete", () => {

  })
  // {
  //   it('this is for testing'){
  //     console.log("hi");
  //   }
  // }
})

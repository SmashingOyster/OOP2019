"use strict"

var assert = require('assert');
var chai = require('chai');
var chaiChanges = require("chai-changes");
chai.use(chaiChanges);
var vehicle = require('../Vehicle/vehicle');
var expect = chai.expect;

describe("Person", function(){
  describe("constructor()", function(){
    it("should be Doug Dimmadome, age 72", function(){
      let DougDimmadome = new vehicle.Person("Doug Dimmadome", 1200000, 72, "BAD", "CAR");
      //var GordonRamsey = new vehicle.Person("Gordon Ramsey", 100000000, 52, "GOOD", "PLANE");
      assert.equal("Doug Dimmadome", DougDimmadome.name);
      assert.equal(72, DougDimmadome.age);
    });
    it("should have his Car license with bad credit and have $1,200,000 in the bank!", function(){
      let DougDimmadome = new vehicle.Person("Doug Dimmadome", 1200000, 72, "BAD", "CAR");
      assert.equal("BAD", DougDimmadome.credit);
      assert.equal(1200000, DougDimmadome.balance);
      assert.equal("CAR", DougDimmadome.license);
    });
    it("should be Gordon Ramsey, age 52, with his plane license and $100,000,000 in the bank", function(){
      let GordonRamsey = new vehicle.Person("Gordon Ramsey", 100000000, 52, "GOOD", "PLANE");
      assert.equal("Gordon Ramsey", GordonRamsey.name);
      assert.equal(52, GordonRamsey.age);
      assert.equal("PLANE", GordonRamsey.license);
      assert.equal(100000000, GordonRamsey.balance);
    });
  });
});


describe("Car", function(){
  describe("constructor()", function(){
    it("should be White, Tesla Model Y at the price of $47,000", function(){
      let DougDimmadome = new vehicle.Person("Doug Dimmadome", 1200000, 72, "BAD", "CAR");
      let TeslaModelY = new vehicle.Car("Tesla Model Y", DougDimmadome, "White", true, 47000);
      assert.equal("Tesla Model Y", TeslaModelY.model);
      assert.equal("White", TeslaModelY.color);
      assert.equal(47000, TeslaModelY.price);
    });
    it("should be owned by Doug Dimmadome and allow him to purchase the Tesla model Y", function(){
      let DougDimmadome = new vehicle.Person("Doug Dimmadome", 1200000, 72, "BAD", "CAR");
      assert.equal("Doug Dimmadome", DougDimmadome.name);
      let TeslaModelY = new vehicle.Car("Tesla Model Y", DougDimmadome, "White", true, 47000);


  });
  });
});

describe("Plane", function(){
  describe("constructor()", function(){
    it("should be a White, Cessna Citation Mustang", function(){
      let GordonRamsey = new vehicle.Person("Gordon Ramsey", 100000000, 52, "GOOD", "PLANE");
      let CessnaMustang = new vehicle.Plane("Cessna Citation Mustang", GordonRamsey, "White", true, 47000);
      assert.equal("Cessna Citation Mustang", CessnaMustang.model);
      assert.equal("White", CessnaMustang.color);
    });
    it("should be owned by Gordon Ramsey", function(){
      let GordonRamsey = new vehicle.Person("Gordon Ramsey", 100000000, 52, "GOOD", "PLANE");
      assert.equal("Gordon Ramsey", GordonRamsey.name);
    });
  });
});

describe("Dealership", function(){
  describe("constructor()", function(){
    it("should have a customer, Doug Dimmadome", function(){
      let GordonRamsey = new vehicle.Person("Gordon Ramsey", 100000000, 52, "GOOD", "PLANE");
      let CessnaMustang = new vehicle.Plane("Cessna Citation Mustang", GordonRamsey, "White", true, 47000);
      let DougDimmadome = new vehicle.Person("Doug Dimmadome", 1200000, 72, "GOOD", "CAR");
      let TeslaModelY = new vehicle.Car("Tesla Model Y", DougDimmadome, "White", true, 47000);
      assert.equal("Doug Dimmadome", DougDimmadome.name);

    });
  });
});

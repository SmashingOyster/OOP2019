"use strict"
var assert = require('assert');
var chai = require('chai');
var car = require('../car/car');
var expect = chai.expect;

describe("Car", function(){
    describe("constructor()", function(){
    it("should be owned by Bob", function(){
        let BobsCar = new car.Car("Car", "Bob", "White");
        assert.equal("Bob", BobsCar.owner);
        
    });
    it("should be a white car", function(){
        let BobsCar = new car.Car("Car", "Bob", "White");
        assert.equal("White", BobsCar.color);
    });
   // it("should fail to drive when not owned by Bob", function() {
     //   let BobsCar = new car.Car("Car", "Bob", "White");
        //let OtherCar = new car.Car("Car", "John", "Blue");
       // expect(BobsCar.drive().to.throw(Car.BAD_CAR_OWNER_DRIVE));
  //  });
});
});
"use strict"
var assert = require('assert');
var chai = require('chai');
var car = require('../Car/vehicle');
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
  
    });
});
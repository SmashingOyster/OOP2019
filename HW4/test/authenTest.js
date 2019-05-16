"use strict"

var assert = require('assert');
var chai = require('chai');

describe("Citizen", function(){
  describe("constructor()", function(){
    it("Should create a citizen with an Authentication number 001", function(){
      let Philip = new transaction.Citizen("Citizen", "Philip Philipson", 001);
      assert.equal(001, Philip.authNum);
    });
  });
});

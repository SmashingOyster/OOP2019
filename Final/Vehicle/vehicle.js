"use strict"

class BadVehicleState {
  constructor(issue){
    this.issue = issue;
  }
}
class BadCustomerState {
  constructor(issue){
    this.issue = issue;
  }
}
class Person{
  constructor(balance, age, credit, license){
    console.log("Making a person..");
    this._balance = balance;
    this._age = age;
    this._credit = credit;
    this._license = license;
  }
  get credit(){
    return this._credit;
  }
  set credit(cred){
    if(typeof cred == "string"){
      this._credit = cred;
    }
  }
  get age(){
    return this._age;
  }
  set age(happybirtdhay){
    if(typeof happybirtdhay == "number"){
      this._age = happybirtdhay;
    }
  }
  set license(newlic){
    if(typeof newlic == "string"){
      this._license = newlic;
    }
  }
  get license(){
    return this._license;
  }
  get balance(){
    return this._balance;
  }
  set balance(input){
    if(typeof input == "number"){
      this._balance = input;
    }
  }
  makepurchase(wantedpur){ // maybe just have a check balance & not purchase
    let newbal = 0;
    console.log("Making a purchase..");
    if(typeof wantedpur == "number"){
      if(wantedpur <= balance()){
        console.log("Balance meets sufficient funds... Processing transaction...");
        newbal = (balance() - wantedpur);
        balance(newbal);
        console.log("Resulting balance... " + balance());
      }
      else {
        console.log("You have insufficient funds.. checking your credit..");
        if(this._credit == "GOOD"){
          newbal = (wantedpur - balance());
          balance(newbal);
          console.log("Your Credit looks good! Giving you the sufficient funds..");
        }
        else if(this._credit == "BAD") {
          console.log("Your Credit is bad.. looks like we cant give you the funds");
        }
        else{
          throw Person.BAD_CUSTOMER_CREDIT_NOTSET;
        }
      }
    }
  }

}
class Vehicle{
  constructor(model, owner, color, keys, price){
    console.log("Creating Vehicle");

    this._model = model;
    this._owner = owner;
    this._color = color;
    this._keys = keys;
    this._price = price;
  }
  drive(){
    throw new Error("Unable to operate an abstract vehicle....");
  }
  get model(){
    return this._model;
  }
  get color(){
    return this._color;
  }
  get owner(){
    return this._owner;
  }
  get price(){
    return this._price;
  }
  get keys(){
    return this._keys;
  }
}

class Car extends Vehicle{
  constructor(model, owner, color, keys, price){
    super(model, owner, color, keys, price);
    console.log("Signing papers for your BRAND NEW CAR!!!");
    this._color = color;
    this._keys = keys;
    this._owner = owner;
    this._model = model;
    this._price = price;
  }
  set model(newmodel){
    if(typeof newmodel == "string"){
      this._model = newmodel;
    }
  }
  get model(){
    return this._model;
  }
  get owner(){
    return this._owner;
  }
  set owner(newowner)){
    if(typeof newowner == "object"){
      this._owner = newowner;
    }
  }
  set color(newcolor){
    if(typeof newcolor == "string"){
      this._color = newcolor;
    }
  }
  get color(){
    return this._color;
  }
  set price(newprice){
    if(typeof newprice == "number"){
      this._price = newprice;
    }
  }
  get price(){
    return this._price;
  }

}


Person.BAD_CUSTOMER_CREDIT_NOTSET = new BadCustomerState("Customer must have good or bad credit!");
Car.BAD_VEHICLE_MODEL_NOTSET = new BadVehicleState("There must be a model for your vehicle");

// Ideas: have abstract class handle checking user info
// have car or plane drive call for a simpler class
// owner is another class object. Customer, checks user credit
// person class has money, credit, age,

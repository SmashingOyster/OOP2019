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
  constructor(name, balance, age, credit, license){
    console.log("Making a person..");
    this._balance = balance;
    this._age = age;
    this._credit = credit;
    this._license = license;
    this._name = name;
  }
  get name(){
    return this._name;
  }
  set name(newname){
    if(typeof newname == "string"){
      this._name = newname;
    }
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
      if(wantedpur <= this._balance){
        console.log("Balance meets sufficient funds... Processing transaction...");
        newbal = (this._balance - wantedpur);
        this._balance = newbal;
        console.log("Resulting balance... " + this._balance);

      }
      else {
        console.log("You have insufficient funds.. checking your credit..");
        if(this._credit == "GOOD"){
          newbal = (wantedpur - this._balance);
          this._balance = newbal;
          console.log("Your Credit looks good! Giving you the sufficient funds..");

        }
        else if(this._credit == "BAD") {
          console.log("Your Credit is bad.. looks like we cant give you the funds");
          newbal = (this._balance - wantedpur);
          this._balance = newbal;

        }
        else{
          throw Person.BAD_CUSTOMER_CREDIT_NOTSET;
        }
      }
    }
    else{
      throw new Error("Did not enter number");
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
    console.log("A new car came into inventory");
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
  set owner(newowner){
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
  get keys(){
    return this._keys;
  }
  set keys(keyset){
    if(typeof keyset == "boolean"){
      this._keys = keyset;
    }
  }
drive(){
  console.log("Driving a "  + this._color + " Model: " + this._model + " Car");
  }
}

class Plane extends Vehicle{
  constructor(model, owner, color, keys, price){
    super(model, owner, color, keys, price);
    console.log("A new plane just came into inventory");
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
  set owner(newowner){
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
  get keys(){
    return this._keys;
  }
  set keys(keyset){
    if(typeof keyset == "boolean"){
      this._keys = keyset;
    }
  }

fly(){
  if(this._owner.license() == "PLANE"){

  console.log("Flying a "  + this._color +"  Model: " + this._model + " Plane");
    }
  }
}

class Dealership{
  constructor(car, plane, customer){
    console.log("Creating a Dealership to work with");
    this._plane = plane;
    this._car = car;
    this._customer = customer;
  }
  get customer(){
    return this._customer;
  }
  set customer(newcust){
    if(typeof newcust == "object"){
      this._customer = newcust;
    }
  }
  set car(newcar){
    if(typeof newcar == "object"){
      this._car = newcar;
    }
  }
  get car(){
    return this._car;
  }
  get plane(){
    return this._plane;
  }
  set plane(newplane){
    if(typeof newplane == "object"){
      this._plane = newplane;
    }
  }

  interaction(newcust){
    console.log("Hello, thank you for coming in to the DimmaDealership");
    if(newcust.license == "CAR"){
      this._customer.makepurchase(this._car.price);
      //this._car = null;
      console.log("Thank you for purchasing a car. Hope you enjoy!");
      }
    else if (this._customer.license == "PLANE") {
        this._customer.makepurchase(this._plane.price);
        console.log("Thank you for purchasing a plane. Hope you enjoy!");
      //  this._plane = null;
      }
    else{
      throw new Error("Wrong input for interaction");
      }
    }


  testdrive(){
    console.log("Checking license");
    if(this._customer.license == "CAR"){
        this._car.drive();
    }
    if(this._customer.license == "PLANE"){
        this._plane.fly();
    }
  }
}



Plane.BAD_VEHICLE_MODEL_NOTSET = new BadVehicleState("There must be a model for your plane");
Person.BAD_CUSTOMER_CREDIT_NOTSET = new BadCustomerState("Customer must have good or bad credit!");
Car.BAD_VEHICLE_MODEL_NOTSET = new BadVehicleState("There must be a model for your Car");

exports.Plane = Plane;
exports.Car = Car;
exports.Person = Person;
exports.Dealership = Dealership;
// Ideas: have abstract class handle checking user info
// have car or plane drive call for a simpler class
// owner is another class object. Customer, checks user credit
// person class has money, credit, age,

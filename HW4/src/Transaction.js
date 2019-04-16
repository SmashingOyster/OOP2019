"use strict"

class BadTransactionState{
  constructor(issue){
    this.issue = issue;
  }
}

class Authentication{
  constructor(id, name, authNum){
    console.log("Creating Authentication");
    this._id = id;
    this._name = name;
    this._authNum = authNum;
  }
  makeTransaction(){
    throw new Error("Making an Abstract Transaction");
  }
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get authNum(){
    return this._authNum;
  }
}

class Citizen extends Authentication{
  constructor(id, name, authNum){
    super(id, name, authNum);
    console.log("Making you a citizen, processing information...");
  }

  makeTransaction(){
    console.log("Processesing Transaction...");
    console.log("This is a Citizen Transaction... id: " + this.id + " Name: " + this.Name
  + " Authentication # : " this.authNum)
  }
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get authNum(){
    return this._authNum;
  }
}

class Employee extends Authentication{

}

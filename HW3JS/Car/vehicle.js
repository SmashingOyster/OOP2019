"use strict"

class BadVehicleState {
    constructor(issue) {
        this.issue = issue;
    }
}
class VehicularVehicle{
    constructor(engine, owner, color) {
        console.log("Creating Vehicle");
        this._engine = engine;
        this._owner = owner;
        this._color = color;
    }
    operate(){
        throw new Error("operating abstract vehicle...");
    }
    get owner(){
        return this._owner;
    }
    get color(){
        return this._color;
    }
    get engine(){
         return this._engine;
    }
 }


class Car extends VehicularVehicle{
    constructor(engine, owner, color) {
        super(engine, owner, color);
        console.log("Signing the papers for your car..");
        this.haskeys = true;
    }

    drive(){
        if (this._haskeys == true)
            console.log(this.owner + " is driving a " + this.color + " " + this.engine);
        else {
            throw Car.BAD_CAR_OWNER_DRIVE;
        }
    }
    get owner() {
        return this._owner;
    }
    get color(){
        return this._color;
    }
    get engine() {
        return this._engine;
    }
    set owner (own)
    {
        if(typeof own == "string"){
            this.owner = own;
        }
        else{
            throw Car.BAD_CAR_OWNER_NOTSET;
        }
    }
    get haskeys(){
        return this._haskeys;
    }
    set haskeys(key){
        if(typeof key == "boolean"){
            this._haskeys = key;
        }
        else
            throw Car.BAD_CAR_KEYS_NOTMATCHED;
    }

}

Car.BAD_CAR_OWNER_DRIVE = new BadVehicleState("Driving a car that isnt yours is WRONG!");
Car.BAD_CAR_OWNER_NOTSET = new BadVehicleState("Someone must own the car!?!");
Car.BAD_CAR_KEYS_NOTMATCHED = new BadVehicleState("Keys must be set!");

exports.Car = Car;
exports.BadVehicleState = BadVehicleState;

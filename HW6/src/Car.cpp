#include "../include/Car.h"
#include <string>
#include <iostream>

namespace vehicle{

    const BadVehicleState Car::BAD_VEHICLE_NOKEYS_DRIVE("Can't drive a car with no keys!");

    Car::Car(Color _color, Owner _owner) : color(_color), keys(true), owner(_owner) {

        std::cout << "Signing Papers and giving " << _owner << " the keys" << std::endl;
    }
      Car::~Car(){
        std::cout << "Selling car and salvaging for parts" << std::endl;
    }
    Owner Car::getOwner() const{
        return owner;
    }
    Color Car::getColor() const {
            return color;
    }
    bool Car::getKeys()const {
        return keys;
    }
    void Car::setHasKeys(bool _keys){
        keys = _keys;
    }
    void Car::drive() const {
        if(keys == true){
            std::cout << getOwner() << " is driving a " << getColor() << " Car" << std::endl;
        }
        else
        throw BAD_VEHICLE_NOKEYS_DRIVE;
    }


}

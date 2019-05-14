#include "../include/Car.h"
#include <string>
#include <iostream>

namespace vehicle{

    const BadVehicleState Car::BAD_VEHICLE_NOKEYS_DRIVE("Can't drive a car with no keys!");

    Car::Car(Color _color, Owner _owner, bool _keys)
    : Vehicle(_color, _owner, _keys) {

        std::cout << "Signing Papers and giving " << _owner << " the keys" << std::endl;
    }
      Car::~Car(){
        std::cout << "Selling car and salvaging for parts" << std::endl;
    }


    void Car::drive() const {
        if(getKeys() == true){
            std::cout << getOwner() << " is driving a " << getColor() << " Car" << std::endl;
        }
        else
        throw BAD_VEHICLE_NOKEYS_DRIVE;
    }


}

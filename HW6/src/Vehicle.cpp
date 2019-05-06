#include "../include/Vehicle.h"

#include <iostream>

namespace vehicle{

  Vehicle::Vehicle(Color _color, Owner _owner)
  : color(_color), owner(_owner), keys(true){
    std::cout << "Signing papers and creating Abstract Vehicle, giving " << _owner << " the keys" << std::endl;
  }
  Vehicle::~Vehicle(){
    std::cout << "Selling vehicle and salvaging parts..." << std::endl;
  }

  Vehicle::getOwner() {
    return owner;
  }
  Vehicle::getColor() {
    return color;
  }
  Vehicle::drive(){
    if(keys == true){
    std::cout << getOwner() << " is driving Abstract " << getColor() << " Vehicle" << std::endl;
  }
  }

}

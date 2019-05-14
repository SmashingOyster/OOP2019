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
  void Vehicle::setOwner(Owner _owner){
    owner = _owner;
  }
  Owner Vehicle::getOwner() const{
    return owner;
  }
  Color Vehicle::getColor() const{
    return color;
  }
  void Vehicle::setColor(Color _color){
    color = _color;
  }
  bool Vehicle::setKeys(bool _keys){
    keys = _keys;
  }
  bool Vehicle::getKeys() const{
    return keys;
  }
  void Vehicle::drive(){
    if(getKeys() == true){
    std::cout << getOwner() << " is driving Abstract " << getColor() << " Vehicle" << std::endl;
    }
  }

}

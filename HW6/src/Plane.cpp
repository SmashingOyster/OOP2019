#include "../include/Plane.h"
#include <string>
#include <iostream>

namespace vehicle{
  const BadVehicleState Plane::BAD_VEHICLE_NOKEYS_DRIVE("Can't Drive a plane with no keys!");

  Plane::Plane(Color _color, Owner _owner)
      : Vehicle(_color, _owner, _keys) {

    std::cout << "Signing papers and giving " << _owner << " the keys" << std::endl;

  }

  Plane::~Plane() {
    std::cout << "Selling car and salvaging for parts " << std::endl;
  }
  Owner Plane::getOwner() const{
    return owner;
  }
  Color Plane::getColor() const{
    return color;
  }
  bool Plane::getKeys() const{
    return keys;
  }
  void Plane::setHasKeys(bool _keys){
    keys = _keys;
  }
  void Plane::drive() const override{
    if(keys == true){
      std::cout << getOwner() " is flying a " << getColor() << " plane. They
      are approximately 1700 ft above the ground" << std::endl;
    }
    else
    throw BAD_VEHICLE_NOKEYS_DRIVE;
  }
}

#include "../include/Plane.h"
#include <string>
#include <iostream>

namespace vehicle{
  const BadVehicleState Plane::BAD_VEHICLE_NOKEYS_DRIVE("Can't Drive a plane with no keys!");

  Plane::Plane(Color _color, Owner _owner, bool _keys)
      : Vehicle(_color, _owner, _keys) {

    std::cout << "Signing papers and giving " << _owner << " the keys" << std::endl;

  }

  Plane::~Plane() {
    std::cout << "Selling car and salvaging for parts " << std::endl;
  }

  void Plane::drive() const{
    if(getKeys() == true){
      std::cout << getOwner() << " is flying a " << getColor()
      << " plane. They are approximately 1700 ft above the ground" << std::endl;
    }
    else
    throw BAD_VEHICLE_NOKEYS_DRIVE;
  }
}

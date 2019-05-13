#pragma once

#include "Color.h"
#include "Owner.h"
#include "Plane.h"
#include "Car.h"

namespace vehicle{

  class PlaneCar : public Plane, public Car{
    public: PlaneCar(Color _color, Owner _owner, bool _keys);
    public: void menu() const;
    public: void drive() const;
    public: ~PlaneCar();
    public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;
  };
}

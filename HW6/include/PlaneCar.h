#pragma once

#include "Color.h"
#include "Owner.h"
#include "Plane.h"
#include "Car.h"

namespace vehicle{

  class PlaneCar : public Plane, public Car{
    private: const Color color;
    private: const Owner owner;
    private: bool keys;
    public: PlaneCar(Color _color, Owner _owner, bool _keys);
    public: Color getColor() const;
    public: Owner getOwner() const;
    public: bool getKeys() const;
    public: void setHasKeys(bool _keys);
    public void drive() const override;
    public: ~PlaneCar();
    public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;
  }
}

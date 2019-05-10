#pragma once

#include "Color.h"
#include "Owner.h"
#include "Vehicle.h"
#include "BadVehicleState.h"

namespace vehicle{

    class Plane : public virtual Vehicle {
        public: Plane(Color _color, Owner _owner, bool _keys);
        public: void drive() const;
        public: ~Plane();
        public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;

    };
}

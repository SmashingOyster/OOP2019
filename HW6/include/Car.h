#pragma once

#include "Color.h"
#include "Owner.h"
#include "Vehicle.h"
#include "BadVehicleState.h"

namespace vehicle{

    class Car : public virtual Vehicle {
        public: Car(Color _color, Owner _owner, bool _keys);
        public: void drive() const;
        public: ~Car();
        public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;

    };
}

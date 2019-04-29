#pragma once

#include "Color.h"
#include "Owner.h"
#include "Vehicle.h"
#include "BadVehicleState.h"

namespace vehicle{

    class Plane : public virtual Vehicle {
        private: const Color color;
        private: const Owner owner;
        private: bool keys;
        public: Car(Color _color, Owner _owner, bool _keys);
        public: Color getColor() const;
        public: Owner getOwner() const;
        public: bool getKeys() const;
        public: void setHasKeys(bool _keys);
        public: void drive() const override;
        public: ~Plane();
        public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;

    };
}

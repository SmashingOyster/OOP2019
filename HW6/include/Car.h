#pragma once

#include "Color.h"
#include "Owner.h"
#include "BadVehicleState.h"

namespace car{
    
    class Car {
        private: const Color color;
        private: const Owner owner;
        private: bool keys;
        public: Car(Color _color, Owner _owner);
        public: Color getColor() const;
        public: Owner getOwner() const;
        public: bool hasKeys() const;
        public: void setHasKeys(bool _keys);
        public: void drive() const;
        public: ~Car();
        public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;

    };
}
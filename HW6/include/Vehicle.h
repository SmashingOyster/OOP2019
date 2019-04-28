#pragma once

#include "Color.h"
#include "Owner.h"

namespace vehicle{

    class Vehicle {
        private: Color color;
        private: Owner owner;
        private: bool keys;
        public: Vehicle(Color _color=Color::BLACK, Owner _owner=Owner::BETTY, bool _keys=true);
        public: virtual Color getColor();
        public: virtual Owner getOwner();
        public: virtual bool getKeys();
        public: virtual void drive();
        public: virtual ~Vehicle();
        public: static const BadVehicleState BAD_VEHICLE_NOKEYS_DRIVE;

    };
}

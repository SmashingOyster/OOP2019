#pragma once

#include "Color.h"
#include "Owner.h"

namespace vehicle{

    class Vehicle {
        private: Color color;
        private: Owner owner;
        private: bool keys;
        public: Vehicle(Color _color=Color::BLACK, Owner _owner=Owner::BETTY);
        public: virtual Color getColor() const;
        public: virtual Color setColor(Color color);
        public: virtual Owner getOwner() const;
        public: virtual bool getKeys();
        public: virtual void drive() = 0;
        public: virtual ~Vehicle();

    };
}

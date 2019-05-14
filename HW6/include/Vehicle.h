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
        public: virtual void setColor(Color _color);
        public: virtual void setOwner(Owner __owner);
        public: virtual Owner getOwner() const;
        public: virtual void setKeys(bool _keys);
        public: virtual bool getKeys() const;
        public: virtual void drive();
        public: virtual ~Vehicle();
    };
}

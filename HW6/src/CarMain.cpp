#include "../include/Car.h"
#include "../include/Owner.h"
using namespace vehicle;



int main(){
  Vehicle EthanBlackVehicle(Color::BLACK, Owner::BETTY, true);
  Vehicle::Car EthanBlackCar(Color::BLACK, Owner::BETTY, true);
   // EthanBlackCarPtr->setHasKeys(false);
  // EthanBlackCar.drive();
   return 0;
}

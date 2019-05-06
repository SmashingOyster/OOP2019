#include "../include/Car.h"
#include "../include/Owner.h"
#include "../include/Vehicle.h"
using namespace vehicle;



int main(){
  Vehicle *EthanBlackVehicle = new Vehicle(Color::BLACK, Owner::BETTY);
  //Car *EthanBlackCar(Color::BLACK, Owner::BETTY, bool keys = true);
   // EthanBlackCarPtr->setHasKeys(false);
  // EthanBlackCar.drive();
   return 0;
}

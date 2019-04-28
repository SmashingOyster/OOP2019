#include "../include/Car.h"
#include "../include/Owner.h"
using namespace car;



int main(){
    Car EthanBlackCar(Color::BLACK, Owner::ETHAN);
   // EthanBlackCarPtr->setHasKeys(false);
   EthanBlackCar.drive();

}
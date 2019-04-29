
#include "PlaneCar.h"

#include <iostream>
#include <string>
namespace vehicle{

  PlaneCar::PlaneCar(Color _color, Owner _owner, bool _keys)
    : Car(_color, _owner, _keys), Plane(_color, _owner, _keys)
    {
      std::cout << "Doing some cool Engineering.. Constructing PlaneCar" << std::endl;
    }

    void PlaneCar::drive() const override{
      int choice;
      string menu = std::cout<< "Welcome to the PlaneCar UserInterface, \n"
      << "To use the plane mode, press 1 \n"
      << "To use the car mode, press 0 \n"
      << "Press 3 to deactivate engine.." << std::endl;

      std::cin >> choice;
      if(choice == 1){
        std::system("cls");
        std::cout << "Entering Plane Mode... Deploying Jets.... \n" << std::endl;
        std:: cout << menu << std::endl;
      }
      else if(choice == 0){
        std::cout << "Entering Car Mode... Deploying wheels and deactivating jets..." << std:endl;
      }
      else if(choice == 3){
        std::cout << "Powering off the PlaneCar.. " << std::endl;
      }
    }
}


#include "PlaneCar.h"

#include <iostream>
#include <string>
namespace vehicle{

  PlaneCar::PlaneCar(Color _color, Owner _owner, bool _keys)
    : Car(_color, _owner, _keys), Plane(_color, _owner, _keys)
    {
      std::cout << "Doing some cool Engineering.. Constructing PlaneCar \n" << std::endl;
      std::cout << Plane::getOwner() << " is the owner \n"
      << " they take priority and we paint it " << Plane::getColor() << std::endl;
    }
    void PlaneCar::menu() const{
      std::cout<< "Welcome to the PlaneCar UserInterface, \n"
      << "To use the plane mode, press 1 \n"
      << "To use the car mode, press 0 \n"
      << "Press 3 to deactivate engine.." << std::endl;
    }

    void PlaneCar::drive() const {
      int choice;
      while(choice != 3){
      menu();

      std::cin >> choice;
      if(choice == 1){
        std::system("cls");
        std::cout << "Entering Plane Mode... Deploying Jets.... \n" << std::endl;
        Plane::drive();
        menu();
      }
      else if(choice == 0){
        std::system("cls");
        std::cout << "Entering Car Mode... Deploying wheels and deactivating jets..." << std::endl;
        Car::drive();
        menu();
      }
      else if(choice == 3){
        std::system("cls");
        std::cout << "Powering off the PlaneCar.. " << std::endl;
      }
      else
        std::cout << "Could not recieve correct input for PlaneCar" << std::endl;
    }
  }
  PlaneCar::~PlaneCar(){
    std::cout << "Salvaging parts from the PlaneCar and taking away keys.. " << std::endl;
  }
}

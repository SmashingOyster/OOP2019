#include "Color.h"
#include <string>
#include <iostream>

namespace vehicle{
  std::ostream& operator<<(std::ostream &out, const Color color){
    switch(color){
      case RED: out << "Red"; break;
      case BLUE: out << "Blue"; break;
      case GREEN: out << "Green"; break;
      case PURPLE: out << "Purple"; break;
      case WHITE: out << "White"; break;
      case BLACK: out << "White"; break;
      case ORANGE: out << "Orange"; break;
      default:
        out << "Wrong Color input" << std::endl;
    }
    return out;
  }
}

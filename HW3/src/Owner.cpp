#include "../include/Owner.h"

namespace car{
  std::ostream& operator<<(std::ostream &out, const Owner owner){
    switch(owner){
      case BOB: out << "Bob"; break;
      case KATE: out << "Kate"; break;
      case JOHN: out << "John"; break;
      case BILL: out << "Bill"; break;
      case ETHAN: out << "Ethan"; break;
      case MITCHELL: out << "Mitchell"; break;
      case BETTY: out << "Betty"; break;
      default:
            out << "Wrong Owner input" << std::endl;
    }
    return out;
  }
}

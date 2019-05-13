#pragma once
#include <string>
#include <iostream>

namespace vehicle{
    enum Owner{
        BOB, KATE, JOHN, BILL, ETHAN, MITCHELL, BETTY};


std::ostream& operator<<(std::ostream &out, const Owner &owner);

}

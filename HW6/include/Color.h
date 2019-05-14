#pragma once
#include <string>
#include <iostream>

namespace vehicle{
    enum Color {
       RED, BLUE, GREEN, PURPLE, WHITE, BLACK, ORANGE};


std::ostream& operator<<(std::ostream &out, const Color &color);


}

   // const char* colors[] = {"RED", "BLUE", "GREEN", "PURPLE", "WHITE", "BLACK", "ORANGE"};

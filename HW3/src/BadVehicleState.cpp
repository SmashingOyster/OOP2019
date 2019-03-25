#include "../include/BadVehicleState.h"

namespace car{
    BadVehicleState::BadVehicleState(const std::string &_issue)
    : issue(_issue)
    {
    }
    std::string BadVehicleState::getIssue() const {
        return issue;
    }
     void BadVehicleState::setIssue(const std::string &_issue){
        issue = _issue;

    }
}
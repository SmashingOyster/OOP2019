#include "../include/BadVehicleState.h"

namespace vehicle{
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

#pragma once
#include <string>

namespace vehicle{
    class BadVehicleState{
        private: std::string issue;
        public: BadVehicleState(const std::string &_issue);
        public: std::string getIssue() const;
        public: void setIssue(const std::string &_issue);
    };
}

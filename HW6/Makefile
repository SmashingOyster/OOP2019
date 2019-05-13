CXXFLAGS=-std=c++14 -Iinclude -fPIC -pthread

all: bin/car

tmp/Color.o : src/Color.cpp include/Color.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/Owner.o : src/Owner.cpp include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/Car.o : src/Car.cpp include/Car.h include/BadVehicleState.h include/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/Plane.o : src/Plane.cpp include/Plane.h include/BadVehicleState.h include/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/PlaneCar.o : src/PlaneCar.cpp include/PlaneCar.h include/Plane.h include/BadVehicleState.h include/Color.h include/Owner.h include/Car.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/BadVehicleState.o : src/BadVehicleState.cpp include/BadVehicleState.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

lib/libcar.so : tmp/Car.o tmp/Plane.o tmp/PlaneCar.o tmp/BadVehicleState.o tmp/Color.o tmp/Owner.o
	$(CXX) $(CXXFLAGS) -shared -o $@ $^

tmp/CarMain.o : src/CarMain.cpp include/Car.h include/BadVehicleState.h include/Color.h include/Owner.h include/Vehicle.h include/Plane.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

bin/car : tmp/CarMain.o lib/libcar.so
	$(CXX) $(CXXFLAGS) -o $@ $^

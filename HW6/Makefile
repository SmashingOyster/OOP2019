CXXFLAGS=-std=c++14 -Iinclude -fPIC

all: bin/car

tmp/Car.o : src/Car.cpp include/Car.h include/BadVehicleState.h include/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/Plane.o : src/Plane.cpp include/Plane.h include/BadVehicleState.h include/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmo/PlaneCar.o : src/Plane.cpp src/Car.cpp src/PlaneCar.cpp include/PlaneCar.h include/Plane.h include/BadVehicleState.h indlue/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/BadVehicleState.o : src/BadVehicleState.cpp include/BadVehicleState.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

lib/libcar.so : tmp/Car.o tmp/Plane.o tmp/PlaneCar.o tmp/BadVehicleState.o
	$(CXX) $(CXXFLAGS) -shared -o $@ $^

tmp/CarMain.o : src/CarMain.cpp include/Car.h include/BadVehicleState.h include/Color.h include/Owner.h include/Vehicle.h include/Plane.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

bin/car : tmp/CarMain.o lib/libcar.so
	$(CXX) $(CXXFLAGS) -o $@ $^

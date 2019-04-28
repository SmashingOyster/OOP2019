CXXFLAGS=-std=c++14 -Iinclude -fPIC

tmp/Car.o : src/Car.cpp include/Car.h include/BadVehicleState.h include/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

tmp/BadVehicleState.o : src/BadVehicleState.cpp include/BadVehicleState.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

lib/libcar.so : tmp/Car.o tmp/BadVehicleState.o
	$(CXX) $(CXXFLAGS) -shared -o $@ $^

tmp/CarMain.o : src/CarMain.cpp include/Car.h include/BadVehicleState.h include/Color.h include/Owner.h
	$(CXX) $(CXXFLAGS) -c -o $@ $<

bin/car : tmp/CarMain.o lib/libcar.so
	$(CXX) $(CXXFLAGS) -o $@ $^
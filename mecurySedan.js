//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    class Car extends VehicleModule {
        constructor (make, model, year, color, mileage) {
            super (make, model, year, color, mileage);
            this.maximumPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
        }
    }
    function loadPassenger(num) {
        if(this.passenger <= this.maximumPassengers) {
            if((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } 
            else {
                console.log(this.model + " " + this.make + " does not have enough room to fit all passengers.");
            }
                else {
                        console.log(this.model + " " + this.make + " is full." )
                }
        }
    }
    function start() {
        if(this.fuel > 0) {
            return this.started == true;
            console.log('Engine has started.');
        }
        else {
            return this.started = false;
            console.log('Fuel tank is empty.')
        }
    }
    function scheduleService(mileage) {
        if(this.mileage > 30000) {
            return this.scheduleService = true;
            console.log('Time to schedule service!')
        }
    }
}

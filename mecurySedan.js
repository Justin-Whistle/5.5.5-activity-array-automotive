//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Mercury extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassenger = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    loadPassenger() {
        if (this.passenger < this.maxPassenger) {
            console.log("They're are more seats available!");
        }
        else {
            console.log("There is no more room for passengers!");
        }

    }

    scheduleService() {
        if (this.mileage >= 30000) {
            console.log("This vehicle needs service!");
            return this.scheduleService == true;
        }
        else {
            console.log("Vehicle's service is up to date!");
            return this.scheduleService == false;
        }
    }

    start(){
        if (this.fuel > 0) {
            console.log("Engine is started!");
            return this.started == true;
        }
        else {
            console.log("Engine is not started!");
            return this.started == false;
        }
    }
}
type Status = "stopped" | "started"
class Vehicle {
  _make:string
  _model: string
  _wheels: string | number
  _status: Status
    constructor (make:string, model:string, wheels:string | number, status:Status) {
      this._make = make;
      this._model = model;
      this._wheels = wheels;
      this._status = status;
  
    }
    start() {
      this._status;
    }
    stop() {
      this._status;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, wheels, status) {
      super(make, model, "four", "started");
    }
    
    }
    function add(x: number | string){
      if( typeof x ==="string"){
        this._wheels = +x;
      }else{
        return x; 
      }

  
  class MotorCycle extends Vehicle {
    constructor(make, model, status) {
      super(make, model, 2, "started");
    }
  }
  
  function printStatus(vehicle) {
    if (vehicle.status === "running") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S", "status");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley._make.toLocaleUpperCase());
  
  const myBuick = new Car("Buick", "Regal", "status");
  myBuick._wheels = +myBuick._wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.mdl);
  
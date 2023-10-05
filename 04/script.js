// Vehicle class
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  // Return a description of the vehicle
  getDescription() {
    return `${this.name} has ${this.wheels} wheels`;
  }
}

// Car class extends Vehicle
// Add number of doors
class Car extends Vehicle {
  constructor(name, wheels, doors) {
    super(name, wheels);
    this.doors = doors;
  }

  // Override the getDescription method
  // Inherit the original method with super
  getDescription() {
    return `${super.getDescription()} and ${this.doors} doors`;
  }
}

// Bike class extends Vehicle
class Bike extends Vehicle {
  constructor(name, wheels, type) {
    super(name, wheels);
    this.type = type;
  }

  // Override the getDescription method
  // Inherit the original method with super
  getDescription() {
    return `${super.getDescription()} and is a ${this.type} type`;
  }
}

const myCar = new Car("My Car", 4, 4);
console.log(myCar.getDescription()); // My Car has 4 wheels and 4 doors

const myBike = new Bike("My Bike", 3, "offroad");
console.log(myBike.getDescription()); // My Bike has 2 wheels and is a offroad type

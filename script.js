// Vehicle interface
class Vehicle {
  drive() {}
}

// Concrete classes
class Bike extends Vehicle {
  drive() {
    return "Bike is moving on the road 🏍️";
  }
}

class Car extends Vehicle {
  drive() {
    return "Car is driving comfortably 🚗";
  }
}

class Truck extends Vehicle {
  drive() {
    return "Truck is transporting goods 🚚";
  }
}

// Factory class
class VehicleFactory {
  static getVehicle(type) {
    switch (type) {
      case "bike":
        return new Bike();
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      default:
        return null;
    }
  }
}

// UI Logic
document.getElementById("create-btn").addEventListener("click", () => {
  const selected = document.getElementById("vehicle-select").value;
  const vehicle = VehicleFactory.getVehicle(selected);

  document.getElementById("output").innerHTML =
    `<b>Factory Created:</b> ${selected.toUpperCase()}<br><br>
     <b>Action:</b> ${vehicle.drive()}`;
});

// Product classes
class Circle {
  constructor() {
    this.type = "Circle";
  }
  draw() {
    return "Drawing a circle ⭕";
  }
}

class Square {
  constructor() {
    this.type = "Square";
  }
  draw() {
    return "Drawing a square ⬜";
  }
}

class Triangle {
  constructor() {
    this.type = "Triangle";
  }
  draw() {
    return "Drawing a triangle 🔺";
  }
}

// Factory
class ShapeFactory {
  static createShape(shapeType) {
    switch (shapeType) {
      case "circle":
        return new Circle();
      case "square":
        return new Square();
      case "triangle":
        return new Triangle();
      default:
        throw new Error("Unknown shape type: " + shapeType);
    }
  }
}

// UI logic
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("shape-select");
  const button = document.getElementById("create-btn");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    try {
      const type = select.value;
      const shape = ShapeFactory.createShape(type);

      output.innerHTML = `
        <div>
          <strong>Factory created:</strong> ${shape.type}<br />
          <strong>Action:</strong> ${shape.draw()}
        </div>
      `;
    } catch (err) {
      output.textContent = err.message;
    }
  });
});

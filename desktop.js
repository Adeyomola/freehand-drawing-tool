class BasicDrawing {
  constructor(element) {
    // canvas property;
    this.element = element;
    element.height = document.documentElement.clientHeight;
    element.width = document.documentElement.clientWidth;
  }

  // define methods
  freeHand(element, context) {
    let draw = false;
    let previousX = null;
    let previousY = null;

    window.addEventListener("mousedown", (e) => {
      draw = true;
    });
    window.addEventListener("mouseup", () => {
      draw = false;
    });
    window.addEventListener("mousemove", (e) => {
      if (previousX == null || previousY == null || !draw) {
        previousX = e.offsetX;
        previousY = e.offsetY;
        return;
      }
      context = element.getContext("2d");
      context.beginPath();
      context.lineWidth = penSize;
      context.strokeStyle = strokeColor;
      context.moveTo(previousX, previousY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      context.save();
      context.restore();
      previousX = e.offsetX;
      previousY = e.offsetY;
    });
  }
  // PenSize method
  pen(size1, size2, size3) {
    size1.addEventListener("click", () => {
      return (penSize = 1);
    });
    size2.addEventListener("click", () => {
      return (penSize = 2);
    });
    size3.addEventListener("click", () => {
      return (penSize = 3);
    });
  }

  // Pen Color method
  penColor(black, red, green, blue, yellow, orange) {
    black.addEventListener("click", () => {
      return (strokeColor = "black");
    });
    red.addEventListener("click", () => {
      return (strokeColor = "red");
    });
    blue.addEventListener("click", () => {
      return (strokeColor = "blue");
    });
    green.addEventListener("click", () => {
      return (strokeColor = "green");
    });
    yellow.addEventListener("click", () => {
      return (strokeColor = "yellow");
    });
    orange.addEventListener("click", () => {
      return (strokeColor = "orange");
    });
  }
  // clear method
  clear(clearButton, element, context) {
    context = element.getContext("2d");
    clearButton.addEventListener("click", () => {
      context.clearRect(0, 0, element.width, element.height);
    });
  }
  // save method
  save(saveButton, element) {
    saveButton.addEventListener("click", () => {
      let image = element.toDataURL("image/png", 1.0);
      let link = document.createElement("a");
      link.href = image;
      link.download = "image.png";
      link.click();
    });
  }
}

// declaring element parameters for the BasicDrawing methods
const main = document.getElementById("main");
const button = document.getElementById("button");
const save = document.getElementById("save");
const size1 = document.getElementById("size1");
const size2 = document.getElementById("size2");
const size3 = document.getElementById("size3");
const blackButton = document.getElementById("blackButton");
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const yellowButton = document.getElementById("yellowButton");
const greenButton = document.getElementById("greenButton");
const orangeButton = document.getElementById("orangeButton");

let penSize;
let strokeColor;

// declaring basicDrawing as an instance of the BasicDrawing class
const basicDrawing = new BasicDrawing(main);

// calling the BasicDrawing class methods on the basicDrawing instance/object
basicDrawing.freeHand(main);
basicDrawing.clear(button, main);
basicDrawing.save(save, main);
basicDrawing.pen(size1, size2, size3);
basicDrawing.penColor(
  blackButton,
  redButton,
  greenButton,
  blueButton,
  yellowButton,
  orangeButton
);

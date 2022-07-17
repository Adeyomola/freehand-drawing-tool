class BasicDrawing {
  constructor(element) {
    // canvas property;
    this.element = element;
    element.height = document.documentElement.clientHeight;
    element.width = document.documentElement.clientWidth;
  }
  // define methods
  freeHand(
    element,
    size1,
    size2,
    size3,
    black,
    red,
    green,
    blue,
    yellow,
    orange,
    penSize,
    strokeColor,
    context
  ) {
    let draw = false;
    let previousX = null;
    let previousY = null;

    window.addEventListener("touchstart", () => {
      draw = true;
    });
    window.addEventListener("touchend", () => {
      draw = false;
    });
    window.addEventListener("touchmove", (e) => {
      if (previousX == null || previousY == null || !draw) {
        previousX = e.clientX;
        previousY = e.clientY;
        return;
      }
      context = element.getContext("2d");
      context.beginPath();
      context.lineWidth = penSize;
      context.strokeStyle = strokeColor;
      context.moveTo(previousX, previousY);
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      previousX = e.clientX;
      previousY = e.clientY;
    });
    size1.addEventListener("click", () => {
      penSize = 1;
    });
    size2.addEventListener("click", () => {
      penSize = 2;
    });
    size3.addEventListener("click", () => {
      penSize = 3;
    });
    black.addEventListener("click", () => {
      strokeColor = "black";
    });
    red.addEventListener("click", () => {
      strokeColor = "red";
    });
    blue.addEventListener("click", () => {
      strokeColor = "blue";
    });
    green.addEventListener("click", () => {
      strokeColor = "green";
    });
    yellow.addEventListener("click", () => {
      strokeColor = "yellow";
    });
    orange.addEventListener("click", () => {
      strokeColor = "orange";
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
      console.log(image);
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

// declaring basicDrawing as an instance of the BasicDrawing class
const basicDrawing = new BasicDrawing(main);

// calling the BasicDrawing class methods on the basicDrawing instance/object
basicDrawing.freeHand(
  main,
  size1,
  size2,
  size3,
  blackButton,
  redButton,
  greenButton,
  blueButton,
  yellowButton,
  orangeButton
);
basicDrawing.clear(button, main);
basicDrawing.save(save, main);

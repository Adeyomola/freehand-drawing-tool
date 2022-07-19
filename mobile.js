class BasicDrawing {
  constructor(element) {
    // canvas property;
    this.element = element;
    element.height = document.documentElement.clientHeight;
    element.width = document.documentElement.clientWidth;
    element.style = "touch-action:none;"; // keep the canvas from scrolling on touch
    this.context = this.element.getContext("2d");
  }
  // define methods
  freeHand() {
    let previousX = null;
    let previousY = null;

    document.body.addEventListener("pointermove", (e) => {
      if (previousX == null || previousY == null) {
        previousX = e.offsetX;
        previousY = e.offsetY;
        return;
      }
      this.context.beginPath();
      this.context.lineWidth = penSize;
      this.context.strokeStyle = strokeColor;
      this.context.moveTo(previousX, previousY);
      this.context.lineTo(e.offsetX, e.offsetY);
      this.context.stroke();
      previousX = e.offsetX;
      previousY = e.offsetY;
      document.body.addEventListener("pointerup", () => {
        previousX = null;
        previousY = null;
      });
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
  clear(clearButton) {
    clearButton.addEventListener("click", () => {
      this.context.clearRect(0, 0, this.element.width, this.element.height);
    });
  }
  // save method
  save(saveButton) {
    saveButton.addEventListener("click", () => {
      let image = this.element.toDataURL("image/png", 1.0);
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
basicDrawing.freeHand();
basicDrawing.clear(button);
basicDrawing.save(save);
basicDrawing.pen(size1, size2, size3);
basicDrawing.penColor(
  blackButton,
  redButton,
  greenButton,
  blueButton,
  yellowButton,
  orangeButton
);

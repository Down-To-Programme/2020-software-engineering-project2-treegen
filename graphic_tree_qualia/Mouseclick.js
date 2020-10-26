var user_angle = window.prompt("Please specify the angle!")
var user_length = window.prompt("Please specify the length!")
document.write("length = " + user_length + "\n angle = " +user_angle)


class Point {
  constructor(xOrPoint, y) {
    if (xOrPoint.x !== undefined && xOrPoint.y !== undefined) {
      this.x = xOrPoint.x;
      this.y = xOrPoint.y;
    } else {
      this.x = xOrPoint;
      this.y = y;
    }
  }
}

class DrawingState {
  constructor(position, direction) {
    this.state = Object.create(null);
    this.state.position = position && new Point(position.x, position.y) || new Point(0, 0);
    this.state.direction = direction || 0; // right
    this.stack = [];
  }

  push() {
    this.stack.push(JSON.stringify(this.state));
  }

  pop() {
    this.state = JSON.parse(this.stack.pop() || '{}');
  }

  get depth() {
    return this.stack.length;
  }
}

function drawForward(drawingState, params) {
  let {x, y} = drawingState.state.position;
  let d = drawingState.state.direction;
  let newX = x + params.length * cos(d);
  let newY = y + params.length * sin(d);
  push();
  strokeWeight(drawingState.state.strokeWeight || 1);
  line(x, y, newX, newY);
  pop();
  drawingState.state.position.x = newX;
  drawingState.state.position.y = newY;
};

const tree = {
  params: {
    angle: user_angle,//25,
    length: user_length,//2,
  },
  axiom: 'X',
  rules: {
    X: 'F[-X][X]F[-X]+FX',
    F: 'FF',
  },
  commands: {
    'F': drawForward,
    '-'(drawingState, params) {
      drawingState.state.direction -= params.angle;
    },
    '+'(drawingState, params) {
      drawingState.state.direction += params.angle;
    },
    '['(drawingState, params) {
      drawingState.push();
    },
    ']'(drawingState, params) {
      drawingState.pop();
    },
  }
}

function applyRule(rules, char) {
  return rules[char] || char;
}

function renderAGeneration (system, previousGeneration, drawingState, draw=true) {
  let nextGeneration = '';
  for (const character of previousGeneration) {
    const nextCharacters = applyRule(system.rules, character);
    nextGeneration += nextCharacters;
    if (draw) {
      for (const character of nextCharacters) {
        if (system.commands[character]) {
        	system.commands[character](drawingState, system.params);
      	}
      }
    }
  }
  return nextGeneration;
}

const CANVAS_BOUNDS = new Point(1000, 1000);

function setup() {
  createCanvas(CANVAS_BOUNDS.x, CANVAS_BOUNDS.y);
  angleMode(DEGREES);
  noLoop();
}

numIters = 8;
system = tree;

function mouseClicked() {
  const origin = new Point(mouseX, mouseY);
  let systemState = system.axiom;
  console.log(systemState);
  for (let i = 1; i < numIters; i++) {
    const drawingState = new DrawingState(origin, -90);
    const shouldDraw = i === numIters - 1;
    systemState = renderAGeneration(system, systemState, drawingState, shouldDraw);
    console.log(systemState); 
  }
}
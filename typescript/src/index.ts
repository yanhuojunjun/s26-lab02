import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";

const rectangle = Rectangle(2, 3)
const circle = Circle(1)
const square = Square(3)
const renderer1 = newRenderer(rectangle)
const renderer2 = newRenderer(circle)
const renderer3 = newRenderer(square)
renderer1.draw();
renderer2.draw();
renderer3.draw();
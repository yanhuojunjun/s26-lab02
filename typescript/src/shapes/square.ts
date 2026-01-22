import type { Shape } from "./shape" 

function Square(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { Square }
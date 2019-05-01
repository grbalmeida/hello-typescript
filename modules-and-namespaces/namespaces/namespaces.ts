namespace Geometry {
    export namespace Area {
        const PI: number = 3.14

        export function circumference(radius: number): number {
            return PI * Math.pow(radius, 2)
        }

        export function rectangle(base: number, height: number): number {
            return base * height
        }
    }
}

console.log(Geometry.Area.circumference(10))
console.log(Geometry.Area.rectangle(10, 20))
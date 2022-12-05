class MyArray<T> {
    private _elements: T[]

    constructor(elements: T[] = []) {
        this._elements = elements;
    }

    get elements(): T[] {
        return this._elements
    }


    public push(item: T): void {
        this._elements[this._elements.length] = item;
    }

    public pop(): T {
        let lastItem = this._elements[this._elements.length - 1];
        let currentArray: T[] = [];
        for (let i = 0; i < this._elements.length - 1; i++) {
            currentArray.push(this._elements[i]);
        }
        this._elements = currentArray;
        return lastItem;
    }

    public slice(startIndex: number, endIndex: number = this._elements.length): void {
        let currentArray: T[] = [];
        for (let i = startIndex; i < endIndex; i++) {
            currentArray.push(this._elements[i]);
        }
        this._elements = currentArray;
    }

    public areElementsEqual(index1 : number, index2: number): boolean {
        return this._elements[index1] === this._elements[index2]
    }

    public concat(other: T[]): void {
        for (let i = 0; i < other.length; i++) {
            this._elements.push(other[i]);
        }
    }

    public flatten(): void {
        this._elements = this._elements.reduce((accumulator, value) => accumulator.concat(value), [])
    }

}







const arr = new MyArray<number>([1, 2, 3]) // valid
const arr1 = new MyArray() // valid
console.log(arr);
console.log(arr1);
console.log(arr.elements) // [1, 2, 3];
arr.push(5);
console.log(arr.elements)
console.log(arr.pop())
console.log(arr.elements)
arr.slice(1, 2)
console.log(arr.elements);


const arr2 = new MyArray<Array<string>>([["a", "b", "c"], ["a", "b", "c"], ["a", "b", "c"]]);
arr2.flatten()
console.log(arr2.elements)

const arr3 = new MyArray<number>([1, 1, 3])
console.log(arr3.elements);
console.log(arr3.areElementsEqual(0, 1));
export class Product {
    private _name: string;
    private _costRUB: number;
    constructor(name: string, costRUB: number) {
        this._name = name;
        this._costRUB = costRUB;
    }
    public get name(): string {
        return this._name
    }

    public set name(str: string) {
        this._name = str;
    }

    public get costRUB(): number {
        return this._costRUB
    }

    public set costRUB(str: number) {
        this._costRUB = str;
    }

    public log(): string {
        return `${this.name};${this.costRUB}`;
    }
}

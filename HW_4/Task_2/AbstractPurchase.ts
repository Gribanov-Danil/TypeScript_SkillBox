import { Product } from "./Product"

export abstract class AbstractPurchase {
    private _product: Product;
    private _count: number;
    constructor(product: Product, count: number) {
        this._product = product;
        this._count = count;
    }
    public get product(): Product {
        return this._product;
    }

    public set product(prod: Product) {
        this._product = prod;
    }

    public get count(): number {
        return this._count;
    }

    public set count(count: number) {
        this._count = count;
    }

    abstract getCost(): number;

    abstract log(): string;

    public compare(purchase: AbstractPurchase): boolean {
        return this.getCost() <= purchase.getCost();
    }
}
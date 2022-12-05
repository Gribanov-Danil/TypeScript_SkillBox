import { Product } from "./Product"
import { AbstractPurchase } from "./AbstractPurchase"

export class PurchaseWithDelivery extends AbstractPurchase {
    private _delivery: number;;
    constructor(
        product: Product,
        count: number,
        delivery: number,
    ) {
        super(product, count);
        this._delivery = delivery;
    }
    public get delivery(): number {
        return this._delivery;
    }
    public set delivery(delivery: number) {
        this._delivery = delivery;
    }
    getCost(): number {
        return this.product.costRUB * this.count + this.delivery;
    }
    log(): string {
        return `${this.product.log()};${this.count};${this.delivery}`;
    }
}
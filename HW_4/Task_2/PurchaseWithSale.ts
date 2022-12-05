import { Product } from "./Product"
import { AbstractPurchase } from "./AbstractPurchase"

export class PurchaseWithSale extends AbstractPurchase {
    private _sale: number;
    private _saleIsPercent: boolean;
    constructor(
        product: Product,
        count: number,
        sale: number,
        saleIsPercent: boolean
    ) {
        super(product, count);
        this._sale = sale;
        this._saleIsPercent = saleIsPercent;
    }

    public get sale(): number {
        return this._sale;
    }
    public set sale(sale: number) {
        this._sale = sale;
    }
    public get saleIsPercent(): boolean {
        return this._saleIsPercent;
    }
    public set saleIsPercent(saleIsPercent: boolean) {
        this._saleIsPercent = saleIsPercent;
    }
    getCost(): number {
        return this.saleIsPercent ?
            (this.product.costRUB) * this.count * (1 - this.sale / 100) :
            (this.product.costRUB - this.sale) * this.count;
    }

    log(): string {
        return `${this.product.log()};${this.count};${this.sale};${this.saleIsPercent}`;
    }

}
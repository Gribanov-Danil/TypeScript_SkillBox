import { Product } from "./Product"
import { AbstractPurchase } from "./AbstractPurchase"

export class PurchaseWithCountSale extends AbstractPurchase {
    private _sale: number
    private _saleIsPercent: boolean
    private _countToSale: number
    constructor(
        product: Product,
        count: number,
        sale: number,
        saleIsPercent: boolean,
        countToSale: number
    ) {
        super(product, count);
        this._sale = sale;
        this._saleIsPercent = saleIsPercent;
        this._countToSale = countToSale;
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
    public get countToSale(): number {
        return this._countToSale;
    }
    public set countToSale(countToSale: number) {
        this._countToSale = countToSale;
    }
    getCost(): number {
        if (this.count >= this.countToSale)
            return this.saleIsPercent ?
                (this.product.costRUB - (1 - this.sale / 100)) * this.count :
                (this.product.costRUB - this.sale) * this.count;
        else
            return this.product.costRUB * this.count;
    }
    log(): string {
        return `${this.product.log()};${this.count};${this.sale};${this.saleIsPercent};${this.countToSale}`;
    }
}
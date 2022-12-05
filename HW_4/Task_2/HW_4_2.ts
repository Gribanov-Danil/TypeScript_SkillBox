import { Product } from "./Product"
import { AbstractPurchase } from "./AbstractPurchase"
import { PurchaseWithSale } from "./PurchaseWithSale"
import { PurchaseWithCountSale } from "./PurchaseWithCountSale"
import { PurchaseWithDelivery } from "./PurchaseWithDelivery"


function sortPurchaseArray(purchaseArray: Array<AbstractPurchase>) {

    for (let i = 0, endI = purchaseArray.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (purchaseArray[j].compare(purchaseArray[j + 1])) {
                var swap = purchaseArray[j];
                purchaseArray[j] = purchaseArray[j + 1];
                purchaseArray[j + 1] = swap;
            }
        }
    }
    return purchaseArray;
}


let purchaseArray: Array<AbstractPurchase> = [
    new PurchaseWithSale(new Product("Чипсы", 100), 15, 10, true),
    new PurchaseWithSale(new Product("Газировка", 150), 10, 40, false),
    new PurchaseWithCountSale(new Product("Самса", 30), 80, 50, true, 30),
    new PurchaseWithCountSale(new Product("Фарш", 150), 17, 65, false, 20),
    new PurchaseWithDelivery(new Product("Стол", 1100), 1, 150),
    new PurchaseWithDelivery(new Product("Стакан", 250), 6, 500),
]

for (let i = 0; i < purchaseArray.length; i++) {
    console.log(purchaseArray[i].log());
    console.log(purchaseArray[i].getCost());
}

purchaseArray = sortPurchaseArray(purchaseArray);
for (let i = 0; i < purchaseArray.length; i++) {
    console.log(purchaseArray[i].getCost());
}







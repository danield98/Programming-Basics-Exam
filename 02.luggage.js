function solve(input) {
    let [ priceOverKG, kgLuggage, days, countLuggage ] = input.slice().map(x => Number(x));

    if (kgLuggage < 10) {
        priceOverKG *= 0.2;
    } else if(kgLuggage >= 10 && kgLuggage < 20) {
        priceOverKG *= 0.5;
    };

    if(days > 30) {
        priceOverKG = priceOverKG + (priceOverKG * 0.1);
    } else if(days >= 7 && days <= 30) {
        priceOverKG = priceOverKG + (priceOverKG * 0.15);
    } else if (days < 7) {
        priceOverKG = priceOverKG + (priceOverKG * 0.4);
    }
    
    let totalPrice = countLuggage * priceOverKG;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}
solve(["30",
"18",
"15",
"2"]);
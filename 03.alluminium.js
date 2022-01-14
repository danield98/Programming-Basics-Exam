function solve(input) {
    let countParts = Number(input.shift());
    let size = input.shift();
    let delivery = input.shift();
    let price = 0;

    if (size === "90X130") {
        price = 110 * countParts;
        if (countParts >= 30 && countParts <= 60) {
            price *= 0.95;
        } else if (countParts > 60) {
            price *= 0.92;
        }
    } else if (size === "100X150") {
        price = 140 * countParts;
        if (countParts >= 40 && countParts <= 80) {
            price *= 0.94;
        } else if (countParts > 80) {
            price *= 0.90;
        }
    } else if (size === "130X180") {
        price = 190 * countParts;
        if (countParts >= 20 && countParts <= 50) {
            price *= 0.93;
        } else if (countParts > 50) {
            price *= 0.88;
        }
    } else if (size === "200X300") {
        price = 250 * countParts;
        if (countParts >= 25 && countParts <= 50) {
            price *= 0.91;
        } else if (countParts > 50) {
            price *= 0.86;
        }
    }

    if(delivery === "With delivery") {
        price += 60;
    } 
    
    if(countParts > 99) {
        price *= 0.96;
    } 
    
    if (countParts < 10) {
        console.log(`Invalid order`);
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}

solve(["40", 
"90X130",
"Without delivery"])



// 105
// 100X150
// With delivery	12758.40 BGN	Цената е: 105 бр. * 140 лв. = 14700.00 BGN
// Над 80 броя – 10% отстъпка. 13230.00 BGN
// With delivery - 13230.00 + 60.00 = 13290.00 BGN
// Над 100 броя – 4% отстъпка след доставката = 12758.40 BGN



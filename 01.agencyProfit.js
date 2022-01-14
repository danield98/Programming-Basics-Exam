function solve(input) {
    let agency = input.shift();
    let [ adultTickets, childTickets, adultTicketPrice, paytax ] = input.slice().map(x => Number(x));
    
    let childTicketPrice = (adultTicketPrice * 0.3) + paytax;
    adultTicketPrice += paytax;
    let totalPrice = (adultTickets * adultTicketPrice) + (childTickets * childTicketPrice);
    let profit = totalPrice * 0.2;
    console.log(`The profit of your agency from ${agency} tickets is ${profit.toFixed(2)} lv.`);
    
}
solve(["WizzAir",
"15",
"5",
"120",
"40"]);


// Нетна цената на детски билет: 120 - 70% = 36лв
// Цена на билет за възрастен с такса обслужване:
// 120 +  40 = 160 лв.
// Цена на детски билет с такса обслужване: 36  +  40 = 76 лв.
// Общата цена на всички билети: (5 * 76) + (15 * 160)  = 2780 лв.
// Печалба: 20% от 2790 = 556 лв.

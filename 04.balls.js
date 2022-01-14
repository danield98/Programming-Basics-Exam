function solve(input) {
    let balls = input.shift();
    let counter = 0;
    let total = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let divides = 0;
    let other = 0;

    while(counter < balls) {
        let ball = input.shift();
        counter++;

        if(ball == `red`){
            total += 5;
            redBalls++;
        } else if (ball == `orange`) {
            total += 10;
            orangeBalls++;
        } else if (ball == `yellow`) {
            total += 15;
            yellowBalls++;
        } else if (ball == `white`) {
            total += 20;
            whiteBalls++;
        } else if (ball == `black`) {
            total /= 2;
            divides++;
        } else {
            other++;
        }
    }
    console.log(`Total points: ${total}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${divides}`);

}

solve([3,
    `white`,
    `black`,
    `pink`,
    ])

//     "Total points: {всичките събрани точки}"
// "Red balls: {броят червени топки}"
// "Orange balls: {броят оранжеви топки}"
// "Yellow balls: {броят жълти топки}"
// "White balls: {броят бели топки}"
// "Other colors picked: {броят на избраните топки извън зададените цветове}"
// "Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"

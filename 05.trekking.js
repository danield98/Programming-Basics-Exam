function solve(input) {
    let groups = input.shift();
    let total = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < input.length; i++) {
        total += input[i];
        if (input[i] <= 5) {
            musala += input[i];
        } else if (input[i] > 6 && input[i] <= 12) {
            monblan += input[i];
        } else if (input[i] > 13 && input[i] <= 25) {
            kilimandjaro += input[i];
        } else if (input[i] > 26 && input[i] <= 40) {
            k2 += input[i];
        } else if (input[i] >= 41) {
            everest += input[i];
        }

    }

    musala = (musala / total * 100).toFixed(2);
    monblan = (monblan / total * 100).toFixed(2);
    kilimandjaro = (kilimandjaro / total * 100).toFixed(2);
    k2 = (k2 / total * 100).toFixed(2);
    everest = (everest / total * 100).toFixed(2);

    let mountains = [ musala, monblan, kilimandjaro, k2, everest ] ;
    for (const mountain of mountains) {
        console.log(`${mountain}%`)
    }

    // console.log(musala);
    // console.log(monblan);
    // console.log(kilimandjaro);
    // console.log(k2);
    // console.log(everest);
}
solve([10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78,])
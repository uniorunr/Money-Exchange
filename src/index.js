// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const numberOfCoins = {};

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    const coins = ['H', 'Q', 'D', 'N', 'P'];
    const valuesOfCoins = [50, 25, 10, 5, 1];
    let currentCurrency = currency;
    
    valuesOfCoins.forEach((item, index) => {
        const quotient = Math.floor(currentCurrency / item);
        const remainder = currentCurrency % item;
        if (quotient) {
            numberOfCoins[coins[index]] = quotient;
            currentCurrency = remainder;
        }
    })

    return numberOfCoins;
}

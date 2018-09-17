// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var numberOfCoins = {};
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var coins = ['H', 'Q', 'D', 'N', 'P'];
    var valuesOfCoins = [50, 25, 10, 5, 1];
    var currentCurrency = currency;
    for (var i = 0; i < valuesOfCoins.length; i++) {
        var quotient = Math.floor(currentCurrency / valuesOfCoins[i]);
        var remainder = currentCurrency % valuesOfCoins[i];
        if (quotient) {
            numberOfCoins[coins[i]] = quotient;
            currentCurrency = remainder;
        }
    }
    return numberOfCoins;
}

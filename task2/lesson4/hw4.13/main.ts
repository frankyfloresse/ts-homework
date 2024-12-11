// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

class Currency {
    constructor(public currency: string, public value: number) {}
}

function exchange(sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
           return sumUAH / element.value;
        }
    }
}

console.log(exchange(10000, [new Currency('USD', 25), new Currency('EUR', 42)], 'USD'));
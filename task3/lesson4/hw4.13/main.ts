// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

interface ICurrency {
    currency: string;
    value: number;
}


function exchange(sumUAH: number, currencyValues: ICurrency[], exchangeCurrency: string): number {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
           return sumUAH / element.value;
        }
    }
}

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
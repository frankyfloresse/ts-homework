// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

interface ICurrency {
    currency: string;
    value: number;
}

const exchange = (sumUAH: number, currencyValues: ICurrency[], exchangeCurrency: string): number => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
};

console.log(exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD'));
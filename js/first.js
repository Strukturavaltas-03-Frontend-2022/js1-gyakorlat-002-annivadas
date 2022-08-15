/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
const arr = [11, 22, 33, 44, 55];


brutto = (productPricesArray) =>
    Math.round(
        productPricesArray
            .map(item => item * 1.27)
            .reduce((previousValue, currentValue) => previousValue + currentValue)
        )
            
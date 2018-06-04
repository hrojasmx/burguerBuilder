objeto = {
    ingredients: {
        salad: 1,
        bacon: 10,
        cheese: 2,
        meat: 30
    },
    totalPrice: 4,
    purchasable:false
};

/*
Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
*/

console.log('Object.keys( objeto)  ->', Object.keys( objeto ));
console.log('Object.values( objeto)->', Object.values( objeto ));
console.log('Object.entries( objeto)->', Object.entries( objeto ));


const ingredientSummary = Object.keys( objeto.ingredients )
    .map( ingKey => {
        console.log('key->', ingKey, 'value->', objeto.ingredients[ingKey] );
    });

//function sortByProduct(arr) {
//  return arr.sort(function(a, b) {
//    return (a * arr.indexOf(a) + a) - (b * arr.indexOf(b) + b);
//  });
//}

//console.log(sortByProduct(4))

let example = [23,2,3,4,5]

const sortByProduct = arr => {
    let products = {}

    for(let i = 0; i < arr.length; i++){
        let index = i + 1
        let product = arr[i] * index
        products[product] = arr[i]
    }

    console.log(products)
    let productArr = []
    for(let product in products){
    productArr.push(products[product])
}
    return productArr
}

console.log(sortByProduct(example))
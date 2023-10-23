interface product {
    description: string;
    price:number;
}

const phone: product = {
    description: "nokia a1",
    price: 150.0
}
const tablet: product = {
    description: "ipad air",
    price: 250.0
}

interface Taxcalculationoption {
    tax: number;
    products: product[];
}

function taxcalculation(options: Taxcalculationoption): number[]{
    

    let total = 0;
    options.products.forEach(product => { total +=product.price;})
    return [total, total*options.tax];
}


const shoppingcart= [phone, tablet];
const tax = 0.15;

const result = taxcalculation({
    products: shoppingcart,
    tax: tax,
});

console.log('total', result[0] );
console.log('Tax', result[1]);
//java script task 1.1

function daysDifferent(d1, d2) {
    return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

const d1 = new Date("2024-07-01");
const d2 = new Date("2024-07-10");
console.log(daysDifferent(d1, d2)); 

//task 1.2
function getSortedSales(sales) {
    const salesWithTotal = sales.map(sale => ({
        ...sale, 
        Total: sale.amount * sale.quantity
    }));

    return salesWithTotal.sort((a, b) => b.Total - a.Total);
}

const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 8 },
    { amount: 7000, quantity: 12 }
];

const sortedSales = getSortedSales(sales);

console.log("Original Sales:", sales); 
console.log("Sorted Sales:", sortedSales);


// task 1.3
function projectObject(src, proto) {
    if (typeof src !== "object" || src === null || typeof proto !== "object" || proto === null) {
        return src;
    }

    return Object.keys(proto).reduce((acc, key) => {
        if (key in src) {
            acc[key] = projectObject(src[key], proto[key]);
        }
        return acc;
    }, {});
}

const src = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
};

const proto = {
    prop11: {
        prop22: null
    }
};

const res = projectObject(src, proto);

console.log(res);

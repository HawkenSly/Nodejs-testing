function calculateSum(a) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }
    return total;
}


let testbox = [1, 2, 3, 4, 5];
console.log(calculateSum(testbox));

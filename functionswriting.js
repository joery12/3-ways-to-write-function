function total1(numberA1, numberB1) {
    const squarA1 = (numberA1 * numberA1);
    const squarB1 = (numberB1 * numberB1);
    const sum1 = (squarA1 + squarB1);
    return sum1
}

const result1 = total1(3, 4);
console.log(result1);

const total2 = function(numberA2, numberB2) {
    const squarA2 = (numberA2 * numberA2);
    const squarB2 = (numberB2 * numberB2);
    const sum2 = (squarA2 + squarB2);
    return sum2
};

const result2 = total2(3, 4);
console.log(result2);

const total3 = (numberA3, numberB3) => {
    const squarA3 = (numberA3 * numberA3);
    const squarB3 = (numberB3 * numberB3);
    const sum3 = (squarA3 + squarB3);
    return sum3
};

const result3 = total3(3, 4);
console.log(result3);
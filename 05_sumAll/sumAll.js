const sumAll = function(num1, num2) {
    if (
        num1 < 0 ||
        num2 < 0 ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2)
        )
    {
        return 'ERROR';
    }
    const diff = Math.abs(Math.max(num1, num2) - Math.min(num1, num2));
    console.log(diff);
    let sum = 0;
    for (let i = 0; i <= diff; i++)
    {
        sum += Math.min(num1, num2) + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

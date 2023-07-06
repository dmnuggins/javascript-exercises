const removeFromArray = function(inputArray, ...elements) {


    for (let e of elements) {
        const index = inputArray.indexOf(e);
        if (index !== -1) {
            inputArray.splice(index, 1);
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

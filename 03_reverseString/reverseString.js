const reverseString = function(inputString) {
    reversed = '';
    const inputArray = inputString.split('');
    left = 0;
    right = inputString.length - 1
    temp = ''

    if(!inputString)
    {
        return reversed;
    }
    else
    {
        while(left < right)
        {
            temp = inputArray[left];
            inputArray[left] = inputArray[right];
            inputArray[right] = temp;

            left += 1;
            right -= 1;
        }
        reversed = inputArray.join('');
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

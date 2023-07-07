const convertToCelsius = function(tempF) {
  let tempC = parseFloat(((tempF - 32) * 5) / 9).toFixed(1);

  // tempC = Math.round((tempC * 10) / 10);

  console.log(tempC);

  return parseFloat(tempC);
};

const convertToFahrenheit = function(tempC) {
  let tempF = parseFloat((tempC * (9/5)) + 32).toFixed(1);

  // tempF = Math.round((tempF * 10) / 10);

  console.log(tempF);

  return parseFloat(tempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

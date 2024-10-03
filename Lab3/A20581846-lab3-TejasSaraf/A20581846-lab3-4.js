function celsiusToFahrenheit(celsius) {
  let celsiusNumber = parseFloat(celsius);
  let fahrenheit = (celsiusNumber * 9) / 5 + 32;
  console.log(
    `${celsiusNumber.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`
  );
}

// Test cases
celsiusToFahrenheit(2);
celsiusToFahrenheit(-20);
celsiusToFahrenheit(1000);

// Additional test cases for string values
celsiusToFahrenheit("300");
celsiusToFahrenheit("-3");

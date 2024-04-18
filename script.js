function decimalToBinary(num) {
  // Check if the input is 0
  if (num === 0) {
    return '0';
  }

  let binary = ''; // Initialize an empty string to store the binary representation

  while (num > 0) {
    const remainder = num % 2; // Get the remainder when dividing by 2
    binary = remainder + binary; // Append the remainder to the beginning of the binary string
    num = Math.floor(num / 2); // Divide the number by 2
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;

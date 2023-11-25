function firstNonRepeatedChar(str) {
    const charFrequency = {};
  
    // Count the frequency of each character
    for (let char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    // Find the first character with a frequency of 1
    for (let char of str) {
      if (charFrequency[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character is found
    return null;
  }
  
  // Example usage:
  const inputString = "programming";
  const result = firstNonRepeatedChar(inputString);
  
  if (result !== null) {
    console.log(`The first non-repeated character is: ${result}`);
  } else {
    console.log("No non-repeated character found in the string.");
  }
  
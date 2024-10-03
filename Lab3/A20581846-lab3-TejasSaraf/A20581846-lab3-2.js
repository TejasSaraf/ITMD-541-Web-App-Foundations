function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(`Word: ${str}, Vowels: ${count}`);
}

// Test cases
countVowels("Brian Bailey");
countVowels("education");
countVowels("JavaScript");

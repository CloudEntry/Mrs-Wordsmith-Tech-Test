function arabicToRoman(num: number): string {
    if (num <= 0) {
        throw new Error("Input number must be a positive whole number");
    }
  
    const romanSymbols: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
  
    let romanNumeral = "";
    let remainingNum = num;
  
    for (const [value, symbol] of romanSymbols) {
        while (remainingNum >= value) {
            romanNumeral += symbol;
            remainingNum -= value;
        }
    }
  
    return romanNumeral;
}

console.log(arabicToRoman(8));    // Output: VIII
console.log(arabicToRoman(47));   // Output: XLVII
console.log(arabicToRoman(2021)); // Output: MMXXI
  
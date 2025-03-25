export function intToRoman(int: number) {if(int < 1 ||int >3999){return ("number needs to be bigger than 0 and smaller than 4000")

}
    const romanMap=[
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];
  
    let result = "";
  
    for (const { value, numeral } of romanMap) {
      while (int >= value) {
        result += numeral;
        int -= value;
      }
    }
  
    return result;
  }
  
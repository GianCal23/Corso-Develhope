class Currency {
  private name: string = "";
  private code: string = "";
  private symbol: string = "";

  constructor(name: string, code: string, symbol: string) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;
  }

  describe(): void {
    let description = `The ${this.name} currency `;
    description += `has the code ${this.code} `;
    description += `and uses the symbol ${this.symbol}.`;
    console.log(description);
  }
}

const currencyNaira = new Currency("Naira", "NGN", "₦");
currencyNaira.describe();
console.log(currencyNaira);

const currencyUsDollar = new Currency("United States dollar", "USD", "$");
currencyUsDollar.describe();
console.log(currencyUsDollar);
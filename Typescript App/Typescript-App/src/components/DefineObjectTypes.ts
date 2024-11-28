interface Country {
  name: string;
  code: string;
  population: number;
}
const countryPopulation: Country = {
  code: "NZ",
  population: 5_135_300,
};

const countryData: Country = {
  name: "India",
  code: "IN",
  population: 1_352_642_280,
};

type Currency = {
  name: string;
  code: string;
  symbol: string;
};
const currencyData: Currency = {
  name: "Euro",
  code: "EUR",
  symbol: "€",
};

// Any
let currency: any = { name: "Indian rupee" };
currency.code = "THB";
currency = "Baht";

//Unknown
function countryNameLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  }
}
countryNameLength("United States of America");

//Never
function throwCountryError(message: string): never {
  throw new Error(`Could not find country: ${message}`);
}
throwCountryError("Narnia");

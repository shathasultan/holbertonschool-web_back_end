export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    // income: income, when key and value are the same, you can use the shorthand as one word
    income,
    gdp,
    capita,
  };

  return budget;
}

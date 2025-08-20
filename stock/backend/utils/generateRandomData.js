const generateRandomData = (days, basePrice, volatility) => {
  const historicalData = [];
  let price = basePrice;

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    // random price movement
    price += (Math.random() - 0.5) * volatility;

    historicalData.push({
      date: date.toISOString().split("T")[0], // YYYY-MM-DD format
      close: parseFloat(price.toFixed(2))
    });
  }

  return historicalData;
};

module.exports = generateRandomData;

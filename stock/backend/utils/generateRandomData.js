const generateRandomData = (days, basePrice, volatility) => {
  const historicalData = [];
  let price = basePrice;

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    // random movement
    const change = (Math.random() - 0.5) * volatility;
    const open = price;
    price = Math.max(1, price + change); // price kabhi 0 se niche na jaye
    const close = parseFloat(price.toFixed(2));

    // high-low simulate karo
    const high = parseFloat((close + Math.random() * volatility).toFixed(2));
    const low = parseFloat((close - Math.random() * volatility).toFixed(2));
    const volume = Math.floor(Math.random() * 1000000);

    historicalData.push({
      date: date.toISOString().split("T")[0],
      open,
      high,
      low,
      close,
      volume
    });
  }

  return historicalData;
};

module.exports = generateRandomData;

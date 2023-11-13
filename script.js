function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
  
    fetch(`https://economia.awesomeapi.com.br/last/${fromCurrency}-${toCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data[`${fromCurrency}${toCurrency}`].bid;
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById(
          "result"
        ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
        document.getElementById("result").innerText =
          "Erro na conversão. Tente novamente mais tarde.";
      });
  }
  
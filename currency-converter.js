const getExchangeRate = async(fromCurrency, toCurrency) => {
    const response = await axios.get('http://www.apilayer.net/api/live?access_key=5de5ca2e1b4ccf0191473b28d80d79c9');
    let currencyQuote = `${fromCurrency.toUpperCase()}${toCurrency.toUpperCase()}`
    const exchangeRate = response.data.quotes[currencyQuote];

    // const euro = 1 / rate[fromCurrency];

    // const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
}

const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
}

const convert = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return  `${amount} ${fromCurrency} is worth ${convertedAmount}
        ${toCurrency}. 
        Spend in the following countries: ${countries}`
}

convert('USD', 'DKK', 88).then((message) => { console.log(message); } ).catch((error) => {console.log(error.message); })
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async (req, res) => {
  const nameURL =
    "https://openexchangerates.org/api/currencies.json?app_id=415828aa36104b2fa73e9e9e721d67f4";

  try {
    const namesResponce = await axios.get(nameURL);
    const nameData = namesResponce.data;
    return res.json(nameData);
  } catch (err) {
    onsole.error(err);
  }
});

//get the target amount
app.get("/convert", async (req, res) => {
    const {
        date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency
    } = req.query

    try {
        const dataURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=415828aa36104b2fa73e9e9e721d67f4`;

        const dataResponce = await axios.get(dataURL);
        const rates = dataResponce.data.rates;

        //rates
        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        //final target value
        const targetAmount = (targetRate / sourceRate) * amountInSourceCurrency;

        return res.json(targetAmount.toFixed(2));

    } catch (err) {
        console.error(err);
    }
});

//port
app.listen(5000, () => {
  console.log("Server start 🚀");
});

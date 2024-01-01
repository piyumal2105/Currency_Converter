import React, { useState } from "react";

export default function MainPage() {
  //State for the form fields
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);

  //handleSubmit method
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      date, 
      sourceCurrency, 
      targetCurrency, 
      amountInSourceCurrency
    );
  };

  return (
    <div>
      <center>
        <h1 className="lg:mx-32 mb-20 text-4xl font-bold text-blue-500">
          Convert Your Currencies Today
        </h1>
      </center>

      {/* <p className="lg:mx-32 py-6 opacity-40">
        This tool that quickly shows you the equivalent of one currency in
        another. Just input the amount and select the currencies, and it
        instantly gives you the converted value based on current exchange rates.
        Simple and essential for travel, online shopping, and international
        transactions.
      </p> */}

      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            {/* Date Column */}
            <div className="mb-5">
              <label
                htmlFor={date}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id={date}
                name={date}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Source Currency */}
            <div className="mb-5">
              <label
                htmlFor={sourceCurrency}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                id={sourceCurrency}
                name={sourceCurrency}
                value={sourceCurrency}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Source Currency 01</option>
                <option>Select Source Currency 02</option>
                <option>Select Source Currency 03</option>
              </select>
            </div>
            {/* Target Currency */}
            <div className="mb-5">
              <label
                htmlFor={targetCurrency}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Target Currency
              </label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                id={targetCurrency}
                name={targetCurrency}
                value={targetCurrency}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Target Currency 01</option>
                <option>Select Target Currency 02</option>
                <option>Select Target Currency 03</option>
              </select>
            </div>
            {/* Amount */}
            <div className="mb-5">
              <label
                htmlFor={amountInSourceCurrency}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount in Source Currency
              </label>
              <input
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                type="number"
                id={amountInSourceCurrency}
                name={amountInSourceCurrency}
                placeholder="Amount in Source Currency"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Button */}
            <button
              // type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Get the target currency
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

# Currency Converter

A responsive web-based currency converter developed using HTML, JavaScript, and Bootstrap 5. The application fetches exchange-rate data from the Frankfurter API to convert US Dollars (USD) into multiple currencies.

## Features

- Convert USD into multiple currencies.
- Supports INR, EUR, GBP, JPY, AUD, CAD, and CHF.
- Fetches exchange-rate data from an external API.
- Displays the converted amount and exchange rate.
- Validates empty, zero, and negative amounts.
- Displays popular currencies with country flags.
- Responsive user interface built with Bootstrap 5.

## Technologies Used

- HTML5
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- Frankfurter Exchange Rates API

## Project Structure

```text
javascript-currency-converter/
├── currency.html
├── currency.js
├── README.md
├── .gitignore
└── screenshots/
    ├── README.md
    ├── currency-converter-homepage.png
    └── conversion-result.png
```

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `currency.html` in a web browser.
4. Enter an amount in USD.
5. Select the currency you want to convert to.
6. Click **Convert**.
7. View the converted amount and exchange rate.

No backend or package installation is required.

An internet connection is required to fetch exchange-rate data and load external resources such as Bootstrap and currency flags.

## How It Works

1. The user enters an amount in USD and selects a target currency.
2. JavaScript validates the entered amount.
3. The application sends a request to the Frankfurter API.
4. The response is processed to obtain the selected currency's exchange rate.
5. JavaScript calculates the converted amount.
6. The application displays the converted amount and exchange rate.

## Future Improvements

- Support conversion from currencies other than USD.
- Add a loading indicator while fetching exchange rates.
- Display API errors directly on the page.
- Add a swap-currency feature.
- Improve accessibility and input formatting.

## Author

Developed as a web development project to practise HTML, JavaScript, API integration, asynchronous programming, input validation, and Bootstrap.

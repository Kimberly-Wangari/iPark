// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import QuotationResult from './QuotationResult';

const rootElement = document.getElementById('quotation-result');

const calculateQuotation = (event) => {
  // Your quotation calculation logic goes here
  const quotation = '£10.00'; // Replace with your calculation result
  ReactDOM.render(<QuotationResult quotation={quotation} />, rootElement);
};
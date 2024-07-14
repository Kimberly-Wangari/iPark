// QuotationResult.js
import React from 'react';

const QuotationResult = ({ quotation }) => {
  return (
    <div>
      <h2>Quotation Result</h2>
      <p>
        Your parking quotation is: <strong>{quotation}</strong>
      </p>
    </div>
  );
};

export default QuotationResult;
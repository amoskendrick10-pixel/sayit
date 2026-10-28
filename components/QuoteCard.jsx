

import React from 'react'

const QuoteCard = ({ quote }) => {
  return (
    <div>
      <p>{quote.quote}</p>
      <p>— {quote.author}</p>
    </div>
  );
};

export default QuoteCard;
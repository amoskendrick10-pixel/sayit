"use client"

import React, { useEffect, useState } from "react";
import QuoteCard from "@/components/QuoteCard";

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/quotes"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }

        const data = await response.json();

        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setError("Unable to load quotes. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

 return (
  <div>
    <h1>Quotes</h1>

    {quotes.map((quote) => (
      <QuoteCard key={quote.id} quote={quote} />
    ))}
  </div>
);
};

export default QuotesPage;
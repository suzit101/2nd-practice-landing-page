import React from "react";

const QuotesSection = () => {
  return (
    <section className="bg-gray-100 p-6 my-10 rounded-lg shadow">
      <h2 className="text-center font-bold text-xl mb-4">Inspiring Quotes</h2>
      <blockquote className="text-gray-700 italic">
        <p>
          "The brightness of the process is also a dynamic, which follows a
          change of customs and lectures. It is surprising that the letter
          gothic, which now think a little clear; ahead of letters forms."
        </p>
        <footer className="mt-4 text-right">
          — Kevin Lee at Wall Street, New York
        </footer>
      </blockquote>
      <blockquote className="text-gray-700 italic mt-6">
        <p>
          "The brightness of the process is also a dynamic, which follows a
          change of customs and lectures. It is surprising that the letter
          gothic, which now think a little clear; ahead of letters forms."
        </p>
        <footer className="mt-4 text-right">
          — Kevin Lee at Wall Street, New York
        </footer>
      </blockquote>
    </section>
  );
};

export default QuotesSection;

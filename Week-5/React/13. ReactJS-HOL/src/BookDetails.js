import React from 'react';

function BookDetails({ books }) {
  return (
    <div className="section">
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;

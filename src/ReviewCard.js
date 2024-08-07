import React from 'react';

export default function ReviewCard({ review }) {
  const { author, text, rating } = review;

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
      <h2 className="text-lg font-semibold">{author}</h2>
      <div className="text-yellow-500 mb-2">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

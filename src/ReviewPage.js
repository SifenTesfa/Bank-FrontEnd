import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const dummyReviews = [
  { id: 1, author: 'Jane Doe', text: 'Great product! Highly recommend.', rating: 5 },
  { id: 2, author: 'John Smith', text: 'Not bad, but could be improved.', rating: 3 },
  { id: 3, author: 'Alice Johnson', text: 'Worst purchase ever. Very disappointed.', rating: 1 },
];

export default function ReviewPage() {
  const [reviews, setReviews] = useState(dummyReviews);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>

      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

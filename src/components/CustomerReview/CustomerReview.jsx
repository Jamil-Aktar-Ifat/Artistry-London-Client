import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    review:
      "Absolutely love the craftsmanship and attention to detail in the products! Highly recommend this to anyone looking for high-quality art and craft pieces.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 2,
    name: "David Smith",
    review:
      "Beautifully made products! The delivery was fast, and the quality exceeded my expectations. Will definitely be purchasing more in the future!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Jessica Brown",
    review:
      "Unique and creative items that you can’t find anywhere else. The perfect gift for anyone who loves handcrafted items!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  // Add more reviews as needed
];

const CustomerReview = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl text-center font-bold mb-8">Customer Reviews</h2>

      {/* Review Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Avatar */}
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-bold">{review.name}</h4>
                <div className="flex">
                  {Array(review.rating)
                    .fill()
                    .map((_, index) => (
                      <FaStar
                        key={index}
                        className="text-yellow-500"
                        aria-hidden="true"
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              "{review.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;

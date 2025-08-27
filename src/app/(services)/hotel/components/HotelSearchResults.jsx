import React from "react";
import SortBar from "../../components/SortBar";
import Image from "next/image";
import Pagination from "../../components/Pagination";
import Link from "next/link";

// The main HotelCard component. It accepts a 'hotel' object as a prop,
// which contains all the necessary data to render the card.
export default function HotelSearchResults() {
  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Dhaka",
      location: "Boshundhara, Dhaka",
      rating: 4.5,
      reviews: 2456,
      price: 899,
      image:
        "https://placehold.co/400x250/99e6ff/000000?text=Grand+Hotel+Dhaka",
      amenities: ["Free WiFi", "PARKING", "Pool", "Breakfast"],
      cancellationPolicy: "Only 2 of these rooms left",
      cancellationLink: "FREE cancellation",
    },
    {
      id: 2,
      name: "Luxury Resort & Spa",
      location: "Cox's Bazar, Bangladesh",
      rating: 4.8,
      reviews: 3120,
      price: 1250,
      image: "https://placehold.co/400x250/b3d9ff/000000?text=Luxury+Resort",
      amenities: ["Free WiFi", "PARKING", "Pool", "Breakfast"],
      cancellationPolicy: "Only 1 of these rooms left",
      cancellationLink: "FREE cancellation",
    },
    {
      id: 3,
      name: "City View Hotel",
      location: "Sylhet, Bangladesh",
      rating: 4.2,
      reviews: 1890,
      price: 650,
      image: "https://placehold.co/400x250/cce6ff/000000?text=City+View+Hotel",
      amenities: ["Free WiFi", "PARKING", "Pool"],
      cancellationPolicy: "Limited rooms available",
      cancellationLink: "FREE cancellation",
    },
    {
      id: 4,
      name: "The Tropical Paradise",
      location: "Chittagong, Bangladesh",
      rating: 4.6,
      reviews: 1500,
      price: 950,
      image:
        "https://placehold.co/400x250/d9ffcc/000000?text=Tropical+Paradise",
      amenities: ["Free WiFi", "Pool", "Breakfast"],
      cancellationPolicy: "Only 5 of these rooms left",
      cancellationLink: "FREE cancellation",
    },
    {
      id: 5,
      name: "Silver Sand Beach Resort",
      location: "Saint Martin's Island, Bangladesh",
      rating: 4.9,
      reviews: 5120,
      price: 1800,
      image: "https://placehold.co/400x250/e6ffb3/000000?text=Silver+Sand",
      amenities: ["Free WiFi", "PARKING", "Pool", "Breakfast", "Private Beach"],
      cancellationPolicy: "Booking is essential",
      cancellationLink: "No cancellation",
    },
    {
      id: 6,
      name: "Dhaka Regency",
      location: "Uttara, Dhaka",
      rating: 4.1,
      reviews: 950,
      price: 780,
      image: "https://placehold.co/400x250/fff0b3/000000?text=Dhaka+Regency",
      amenities: ["Free WiFi", "PARKING", "Breakfast"],
      cancellationPolicy: "Book now to get 10% off",
      cancellationLink: "FREE cancellation",
    },
  ];

  return (
    <div className="space-y-6 mb-20">
      {/* Search and sort bar, replicated from the top of the image */}

      <SortBar />

      {/* Renders a card for each hotel in the 'hotels' array */}
      <div className="space-y-6 w-full">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

// Sub-component for a single hotel card
function HotelCard({ hotel }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-full-${i}`} className="text-yellow-400">
          ★
        </span>
      );
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(
        <span key="star-half" className="text-yellow-400">
          ½
        </span>
      );
    }

    // Add empty stars to make a total of 5
    const emptyStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`star-empty-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row w-full transition-transform transform hover:scale-[1.01] duration-300 px-5 py-6">
      {/* Left section: Image */}
      <div className="flex items-center justify-center mb-3 md:mb-0">
        <Image
          src="/images/hotel.png"
          alt={hotel.name}
          width={255}
          height={169}
        />
      </div>

      {/* Center section: Details and Amenities */}
      <div className=" px-3 md:px-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Hotel Name and Location */}
          <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-1">
            {hotel.name}
          </h2>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <svg
              className="w-4 h-4 mr-1 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {hotel.location}
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center mb-3">
            <div className="flex text-lg">{renderStars(hotel.rating)}</div>
            <span className="ml-2 text-gray-700 font-bold">{hotel.rating}</span>
            <span className="text-gray-500 text-sm ml-1">
              ({hotel.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Amenities icons and text */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700 text-sm mb-3">
            {hotel.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                {/* A simple placeholder icon for each amenity */}
                <svg
                  className="w-4 h-4 mr-1 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586z" />
                </svg>
                {amenity}
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="text-sm mt-3 md:mt-0">
          <div className="font-bold text-gray-800">
            {hotel.cancellationPolicy}
          </div>
          <a
            href="#"
            className="text-blue-600 font-bold hover:underline transition-colors duration-200"
          >
            {hotel.cancellationLink}
          </a>
        </div>
      </div>

      {/* Right section: Price and Button */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-5 pt-5 md:pt-0">
        <div className="flex flex-col items-end">
          <span className="text-3xl font-bold text-[#055BC9]">
            ৳{hotel.price}
          </span>
          <span className="text-sm text-gray-500">per night</span>
        </div>
        <button className="w-full md:w-auto mt-4 md:mt-0 py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-[#0A60F9] to-[#B004FE] shadow-lg hover:from-purple-600 hover:to-purple-700 transition-colors duration-300">
          <Link href="/hotel/details">See available rooms</Link>
        </button>
      </div>
    </div>
  );
}

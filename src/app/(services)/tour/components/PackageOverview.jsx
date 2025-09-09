export default function PackageOverview() {
  return (
    <div className="w-full  rounded-xl shadow-md p-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
        Package Overview
      </h2>

      {/* Package List */}
      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
        <li>• Unforgettable 15-day journey through 10 European countries</li>
        <li>
          • Iconic attractions and sightseeing experiences Lord's Cricket Ground
          Madame Tussauds London Eye Eiffel Tower 3rd level Disneyland Paris
          Keukenhof Gardens Mt. Titlis Lindt Chocolate Excursion St. Mark's
          Square with Gondola Ride Leaning Tower of Pisa Vatican Museum and more
        </li>
        <li>
          • Guided tours in 6 major cities London Paris Vaduz Florence Rome and
          the Vatican City
        </li>
        <li>
          • Professional and knowledgeable Tour Manager throughout the tour
        </li>
        <li>• Comfortable 4-star accommodations and daily buffet breakfast</li>
        <li>
          • Delectable Indian and local cuisine options including daily mineral
          water
        </li>
        <li>• Driver tips included</li>
      </ul>

      {/* Sub Title */}
      <h3 className="text-base font-semibold text-gray-900 mt-6 mb-3">
        Additional Essentytip Delights
      </h3>

      {/* Additional List */}
      <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
        <li>
          • Savor a glass of Champagne in France Black Forest Cake in Germany
          and Chocolate Milkshake in Switzerland
        </li>
        <li>
          • Indulge in a Pizza and Pasta meal in Pisa Gelato Ice cream in Rome
          and Masala tea and hotel dinners in select cities
        </li>
        <li>
          • Take home souvenirs from Holland and enjoy driver tips included
        </li>
        <li>
          • Join us for a value-packed European adventure filled with
          breathtaking sights delightful culinary experiences and treasured
          memories
        </li>
      </ul>
    </div>
  );
}

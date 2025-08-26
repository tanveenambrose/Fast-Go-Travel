const SortBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 shadow-sm py-5 px-3 rounded-md">
      <p className="text-gray-700">Showing 1-10 of 56 results</p>

      <label>
        Sort by :
        <select className="border rounded-md px-3 py-2 text-sm ml-2">
          <option>Recommended</option>
          <option>Lowest Price</option>
          <option>Shortest Duration</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;

const SearchBar = () => {
  return (
    <form className="mx-auto pt-4 px-4 pb-2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative p-1">
        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 focus:border-none focus:outline-none bg-white dark:placeholder-gray-400 dark:text-gray-800 dark:focus:border-brown-secondary"
          placeholder="Search journal entries..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-5 bottom-3.5 bg-dark-brown hover:bg-brown-secondary focus:ring-2 focus:ring-dark-brown font-medium rounded-lg text-sm px-4 py-2 dark:bg-dark-brown dark:hover:bg-brown-secondary dark:focus:ring-dark-brown"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

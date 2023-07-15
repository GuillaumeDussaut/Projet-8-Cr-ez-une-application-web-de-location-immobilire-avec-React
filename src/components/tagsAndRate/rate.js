const rating = selectedLocation.rating;

const starColor = rating >= 4 ? "#FF6060" : "#E3E3E3";

return (
  <div className="rate">
    <svg xmlns="http://www.w3.org/2000/svg" width="196" height="36" viewBox="0 0 196 36" fill="none">
      <path d="..." fill={starColor} />
      {}
    </svg>
  </div>
);
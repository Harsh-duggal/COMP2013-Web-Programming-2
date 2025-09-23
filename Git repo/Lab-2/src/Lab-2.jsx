import './App.css';

function CARD({ country, resort, image, rating, price }) {
  const ratingColor = rating > 4.0 ? 'green' : 'red';

  return (
    <div className="card">
      <img src={image} alt={country} className="card-image" />
      <div className="card-content">
        <h2 className="card-country">{country}</h2>
        <p className="card-resort">{resort}</p>
        <p className="card-rating" style={{ color: ratingColor }}>
          {rating} <span className="star">★</span>
        </p>
        <p className="card-price">${price}/night</p>
      </div>
    </div>
  );
}

export default CARD;

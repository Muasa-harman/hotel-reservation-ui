import React from "react";
import "./searchItem.scss";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://wilderness-bookings.b-cdn.net/ord-group-ltd/entumoto-safari-camp/photos/entumoto-safari-camp-maasai-mara-masai-mara-maasai-mara-national-reserve-accommodation.jpeg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Skycrapper Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartments with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCanceOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123.0</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;

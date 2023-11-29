import React from "react";
import "./featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn-images.go2africa.com/wp-content/uploads/2020/03/23131504/angama_mara_view_go2africa.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Maasai Mara</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://perfectwildernesstours.com/wp-content/uploads/2021/03/Ambo-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Amboseli</h1>
          <h2>143 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://africanspicesafaris.com/wp-content/uploads/2020/07/tawi-lodge-amboseli-2-1200x675.gif"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mt kilimanjaro</h1>
          <h2>103 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;

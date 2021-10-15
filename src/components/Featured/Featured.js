import React from "react";
import "./featured.scss";
import photos from "../../data";

export default function Featured() {
  const [firstUrl, secondUrl] = photos;

  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={secondUrl} />
      </div>
    </section>
  );
}

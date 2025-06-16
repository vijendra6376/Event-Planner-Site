import React, { useState } from 'react'
import { galleryData } from './photos.jsx';
import './style.css';


const categories = ["All" , "Mehendi" , "Haldi" , "Sangeet"]
export default function index() {
 const [activeCategory , setActiveCategory]  = useState("All");
const filteredData = activeCategory === "All" ? galleryData : galleryData.filter((item=> item.category=== activeCategory));

  return (
    <div className="gallery">
      <div className="category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}

          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="photos">
        {filteredData.map((item) => (
          <div key={item.id} className="id">
            <img
              src={item.images}
              alt={item.title}
              className="images"
            />
            <div className="title">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


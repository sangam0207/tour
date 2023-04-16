import React, { useState } from "react";

import Tour from "./Tour";
const Tours = ({ tours ,removeTour}) => {
  const [readMore, setReadMore] = useState(false);
 
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id, image, info, price, name } = tour;
          return (
            <div key={id}>
              <article className="single-tour">
                <img src={image} alt={name} />
                <footer>
                  <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                  </div>
                  <p>
                    {readMore ? info : `${info.substring(0, 200)}...`};
                    <button onClick={() => setReadMore(!readMore)}>
                      {readMore ? "show less" : "read more"}
                    </button>
                  </p>
                  <button className="delete-btn" onClick= {()=>removeTour(id)}>
                    not interested
                  </button>
                </footer>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

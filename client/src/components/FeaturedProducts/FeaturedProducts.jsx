import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({type}) => {
  
  const data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/7141+CaFbTL._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/61sR5JMDqgL._AC_UL1500_.jpg",
      title: "RAGEMALL Tunic Blouse",
      isNew: true,
      oldPrice: 26,
      price: 24,
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/513J-24FFYL._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/61g+Ft8dNiL._AC_UL1500_.jpg",
      title: "Floral Lace Dress",
      isNew: false,
      oldPrice: 27,
      price: 25,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/91ucsA4D52L._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/919iuMmTTcL._AC_UL1500_.jpg",
      title: "ANRABESS Long Sleeve Turtleneck ",
      isNew: false,
      oldPrice: 35,
      price: 25,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/61AqlSnLVvS._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/71np92K2x2L._AC_UL1500_.jpg",
      title: "Batwing Long Sleeve",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit
          optio officia corrupti doloribus iusto, veritatis autem corporis omnis
          architecto molestias tempore eligendi provident voluptatem illum minus
          ipsam! Alias, dicta.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

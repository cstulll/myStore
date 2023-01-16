import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/61AqlSnLVvS._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/71np92K2x2L._AC_UL1500_.jpg",
      title: "Batwing Long Sleeve",
      desc: "Batwing Long Sleeve",
      isNew: true,
      oldPrice: 57,
      price: 41,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/91ucsA4D52L._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/919iuMmTTcL._AC_UL1500_.jpg",
      title: "ANRABESS Long Sleeve Turtleneck ",
      desc: "ANRABESS Long Sleeve Turtleneck ",
      isNew: false,
      oldPrice: 35,
      price: 25,
    },
  ];
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price"> 1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>CHECKOUT</button>
      <span className="empty">EMPTY CART</span>
    </div>
  );
};

export default Cart;

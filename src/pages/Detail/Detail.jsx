import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import products from "../Products/Products";
import {  useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";

function Detail() {

  const { slug } = useParams();

  const [detail, setDetail] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const findDetail = products.filter(product => product.slug === slug)
    if(findDetail.length > 0) {
      setDetail(findDetail[0])
    } else {
      navigate('*');
    }

  }, [slug, navigate])

  const handleDecreaseQuantity = () => {
    // setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const carts = useSelector(store => store.cart.items)
    console.log(carts)

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));
  }

  return (
    <div className="m-20">
        <h2 className="text-3xl text-center font-inter">THÔNG TIN CHI TIẾT</h2>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <img src={detail.image} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-5">
              <h1 className="text-4xl uppercase font-bold font-inter">{detail.name}</h1>
              <p className="font-bold text-3xl font-inter">
              {detail.price} VND
              </p>
              <div className="flex gap-5">
              <button onClick={handleDecreaseQuantity} className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">-</button>
              <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
              <button onClick={handleIncreaseQuantity} className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">+</button>
              </div>
              <button onClick={handleAddToCart} className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl w-[25%] cursor-pointer">
                Thêm vào giỏ hàng
              </button>
            <p>{detail.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Detail
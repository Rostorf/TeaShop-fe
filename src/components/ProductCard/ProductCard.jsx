import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../stores/cart';

function ProductCard({ data }) {
    const carts = useSelector(store => store.cart.items)
    console.log(carts)
    const {id, title, price, image, slug} = data;

    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
            e.preventDefault();
            dispatch(addToCart({
                productId: id,
                quantity: 1
            }))
    }

  return (
    <div className='shadow-md rounded-4xl transition-transform duration-200 scale-100 hover:scale-110 mx-15 my-12'>
        <Link to = {`/productlist/${slug}`}>
            <img src={image} alt="name" className='w-full h-auto' />
        </Link>
        <h3 className='text-2xl font-bold capitalize font-inter pl-5 pt-4'>{title}</h3>
        <div className='flex justify-between items-center'>
            <p>
                <span className='text-1xl text-[#272342] font-semibold font-inter pb-3 pl-5'>{price} VND</span>
            </p>
            <button onClick={handleAddToCart} className="bg-[#2aaf5d] m-3 mb-5 py-2 px-2 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-green-700 transition-colors">
                Thêm vào <ShoppingCartIcon/>
            </button> 
        </div>    
    </div>
  )
}

export default ProductCard
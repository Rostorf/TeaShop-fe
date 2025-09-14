import React, {useState, useEffect} from 'react'
import products from '../../pages/Products/Products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../stores/cart';

function CartItem({ data }) {
    
    const {productId, quantity} = data;

    const [detail, setDetail] = useState([]);

    const dispatch = useDispatch();

    const handleDecreaseQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }

    const handleIncreaseQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }

    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])

  return (
    <div className='flex justify-between items-center bg-white text-black p2 border-b-2 border-zinc-200 gap-5'>
        <img src={detail.image} alt="" className='w-12'/>
        <h3>{detail.title}</h3>
        <p>{detail.price * quantity} VND</p>
        <div className='w-20 flex justify-between px-1'>
            <button onClick={handleDecreaseQuantity} className='bg-gray-200 rounded-full w-6 h-6 text-black'>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity} className='bg-gray-200 rounded-full w-6 h-6 text-black'>+</button>
        </div>
    </div>
  )
}

export default CartItem
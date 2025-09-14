import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { toggleStatusTab } from '../../stores/cart';
import { useNavigate } from 'react-router-dom';

function CartTab() {
  const carts = useSelector(store => store.cart.items);

  const statusTab = useSelector(store => store.cart.statusTab);

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <div className={`fixed top-0 right-0 bg-zinc-100 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] tranform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}`}>

      <h2 className='p-5 text-white text-2xl'>Giỏ hàng</h2>
      <div className='p-5'>
        {carts.map((item, key) => 
        <CartItem key={key} data={item}/>  
        )}
      </div>
        <div className='grid grid-cols-2'>
        <button className='bg-white cursor-pointer' onClick={handleCloseTabCart}>Đóng</button>
        <button className='bg-green-600 text-white' onClick={() => {handleCloseTabCart(); navigate('/paymentprocess');}}>
          Thanh toán
        </button>
        </div>
    </div>
  )
}

export default CartTab
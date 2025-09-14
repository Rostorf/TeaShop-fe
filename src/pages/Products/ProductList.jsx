import React from 'react'
import products from '../Products/Products'
import ProductCard from '../../components/ProductCard/ProductCard'
import CartTab from '../../components/CartTab/CartTab'

export default function ProductList() {
  return (
    <div>
        <h1 className='text-3xl mt-18 mb-6 flex items-center justify-center'>Danh sách sản phẩm</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mx-12 mb-20'>
            {products.map((product, key) =>
                <ProductCard key={key} data={product}/>
            )}
        </div>
    </div>
  )
}
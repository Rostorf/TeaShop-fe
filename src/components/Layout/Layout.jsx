import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import CartTab from '../CartTab/CartTab'

function Layout() {
  return (
    <div className='bg-zinc-200'>
        <main className='w-[1200px] max-w-full m-auto p-5'>
            <Navbar/>
            <Outlet/>
        </main>
        <CartTab />
    </div>
  )
}

export default Layout
import React from 'react';
import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='
            w-full 
            bg-green-800  
            text-white 
            flex 
            justify-center 
            py-4
        '>
            <div className="
                container 
                flex 
                justify-between 
                text-lg
            ">
                <Link to='/home'>
                    <img
                        src="https://ik.imagekit.io/vzr6ryejm/farmacia/logo.png"  // Altere para o logo da farmácia
                        alt="Logo"
                        className='w-60'
                    />
                </Link>

                <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                    <form className="w-3/4 flex justify-center">
                        <input className="w-10/12 h-9 rounded-lg px-4 py-4 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar medicamento"  
                            id="busca"
                            name="busca"
                            required
                        />
                        <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className='flex gap-4 py-4'>
                    <Link to='/medicamentos' className='hover:underline'>Medicamentos</Link>  
                    <Link to='/cosmeticos' className='hover:underline'>Cosméticos</Link>  
                    <Link to='/ofertas' className='hover:underline'>Ofertas</Link>  
                    <Link to='/minha-conta' className='hover:underline'>Minha Conta</Link>  
                    <User size={32} weight='bold' />
                    <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

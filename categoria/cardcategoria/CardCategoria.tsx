import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from '../../models/Categoria';



interface CardCategoriaProps {
  categoria: Categoria;
}

const CardCategorias: React.FC<CardCategoriaProps> = ({ categoria }) => {
  return (
    <div className='border rounded-lg overflow-hidden shadow-lg'>
      <header className='bg-slate-700 text-white font-bold text-xl py-2 px-4'>
        {categoria.tipo}
      </header>
      <div className='p-4'>
        <p className='text-lg text-gray-700'>{categoria.descricao}</p>
      </div>
      <div className='flex'>
        <Link to={`/editarcategoria/${categoria.id}`}
          className='w-full text-center bg-teal-400 hover:bg-teal-600 text-white py-2'>
          Editar
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`}
          className='w-full text-center bg-red-400 hover:bg-red-600 text-white py-2'>
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;

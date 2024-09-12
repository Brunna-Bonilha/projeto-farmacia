import React from 'react';
import './index.css';

const Home: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Bem-vinde à Farma Gen</h1>
      <p className="mt-4 text-gray-700">Encontre todos os medicamentos e cosméticos que você precisa com o melhor preço.</p>
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
        Ver Categorias
      </button>
    </div>
  );
}

export default Home;
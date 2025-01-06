"use client"

import React, { useState } from 'react';
import { Plus, ImagePlus } from 'lucide-react';

const CadastroItens = () => {
  const [item, setItem] = useState({
    nome: '',
    preco: '',
    categoria: 'Cozinha',
    imagem: '',
    link: ''
  });

  const categorias = ['Todos', 'Cozinha', 'Banheiro', 'Eletrodomésticos', 'Quarto', 'Decoração', 'outros'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item cadastrado:', item);
    setItem({
      nome: '',
      preco: '',
      categoria: 'Cozinha',
      imagem: '',
      link: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-pink-950 mb-6">Cadastrar Novo Item</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-pink-950 mb-2">Nome do Item</label>
            <input
              type="text"
              value={item.nome}
              onChange={(e) => setItem({...item, nome: e.target.value})}
              className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-pink-950 mb-2">Preço (R$)</label>
            <input
              type="number"
              step="0.01"
              value={item.preco}
              onChange={(e) => setItem({...item, preco: e.target.value})}
              className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-pink-950 mb-2">Categoria</label>
            <select
              value={item.categoria}
              onChange={(e) => setItem({...item, categoria: e.target.value})}
              className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-pink-950 mb-2">Link do Produto</label>
            <input
              type="url"
              value={item.link}
              onChange={(e) => setItem({...item, link: e.target.value})}
              className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-pink-950 mb-2">URL da Imagem</label>
            <input
              type="url"
              value={item.imagem}
              onChange={(e) => setItem({...item, imagem: e.target.value})}
              className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Cadastrar Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroItens;
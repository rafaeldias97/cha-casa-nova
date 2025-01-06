"use client"

import React, { useState } from 'react';
import { Gift, Heart, ShoppingCart, Calendar, ExternalLink } from 'lucide-react';

const ListaPresentes = () => {
  const [itens, setItens] = useState([
    // { 
    //   id: 1, 
    //   nome: 'Jogo de Panelas',
    //   preco: 299.90, 
    //   categoria: 'Cozinha', 
    //   reservado: false,
    //   imagem: '/api/placeholder/400/300',
    //   link: '#'
    // }
  ]);

  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const categorias = ['Todos', 'Cozinha', 'Banheiro', 'Eletrodomésticos', 'Quarto', 'Decoração', 'outros'];

  const reservarPresente = (id) => {
    setItens(itens.map(item => 
      item.id === id ? { ...item, reservado: !item.reservado } : item
    ));
  };

  const itensFiltrados = filtroCategoria === 'Todos' 
    ? itens 
    : itens.filter(item => item.categoria === filtroCategoria);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="relative h-96 bg-pink-100 overflow-hidden">
        <div className="absolute inset-0 bg-pink-900/20 z-10" />
        <img 
          src="/casal.jpeg" 
          alt="Foto do Casal" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-pink-300 p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Rafael & Caroline
          </h1>
          <p className="text-xl mb-4 text-center">Nosso Chá de Casa Nova</p>
          <div className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5" />
            <span>15 de Fevereiro de 2025</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-950 mb-4">Lista de Presentes</h2>
          <p className="text-pink-700 max-w-2xl mx-auto">
            Agradecemos imensamente sua presença em nosso chá de casa nova. 
            Se desejar nos presentear, selecionamos alguns itens que serão muito especiais em nosso novo lar.
            <br />
            <Heart className="w-6 h-6 text-pink-600 inline-block" />
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setFiltroCategoria(categoria)}
              className={`
                px-4 py-2 rounded-full transition-colors
                ${filtroCategoria === categoria 
                  ? 'bg-pink-600 text-white'
                  : 'bg-white border border-pink-200 text-pink-600 hover:bg-pink-50'}
              `}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itensFiltrados.map(item => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.imagem} 
                  alt={item.nome}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-pink-950">{item.nome}</h3>
                  <span className="px-2 py-1 rounded-full text-sm bg-pink-50 text-pink-700">
                    {item.categoria}
                  </span>
                </div>
                <p className="text-xl font-bold text-pink-600 mb-4">
                  R$ {item.preco.toFixed(2)}
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => reservarPresente(item.id)}
                    className={`
                      flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors
                      ${item.reservado 
                        ? 'bg-pink-50 text-pink-600 hover:bg-pink-100' 
                        : 'bg-pink-600 text-white hover:bg-pink-700'}
                    `}
                  >
                    {item.reservado ? (
                      <>
                        <Heart className="w-4 h-4" /> Reservado
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" /> Reservar
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => window.open(item.link, '_blank')}
                    className="p-2 rounded-full border border-pink-200 hover:bg-pink-50"
                  >
                    <ExternalLink className="w-4 h-4 text-pink-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaPresentes;
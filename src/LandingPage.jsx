import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="w-full bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">FreshHarvest Co.</h1>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Login
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-8">
          Welcome to Company's Product Portal
        </h2>
        <div className="relative w-full max-w-2xl aspect-video mb-8">
          <img
            src="https://via.placeholder.com/800x400.png?text=Fresh+Produce+and+Dairy"
            alt="Fresh produce and dairy products"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-xl text-center text-blue-600 max-w-2xl mb-8">
          Discover our wide range of fresh, locally-sourced produce and dairy products. 
          From crisp vegetables to creamy artisanal cheeses, we bring nature's best to your table.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
          Explore Our Products
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-100 p-4">
        <div className="container mx-auto text-center text-blue-600">
          © 2023 FreshHarvest Co. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


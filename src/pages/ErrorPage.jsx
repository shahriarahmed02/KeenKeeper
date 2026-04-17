import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-[#1a3d32] opacity-20">404</h1>
      
      <div className="absolute">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Oops! Page not found</h2>
        <p className="text-slate-500 mb-8 max-w-sm">
          The page you are looking for might have been removed or had its name changed.
        </p>
        
        <Link 
          to="/" 
          className="btn bg-[#1a3d32] hover:bg-[#132d25] text-white border-none px-8 rounded-full transition-all active:scale-95 shadow-lg"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
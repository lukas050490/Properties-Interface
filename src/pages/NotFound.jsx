import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#031716] text-[#6BA3BE] flex-col p-6">
      <h1 className="text-6xl font-bold mb-4 text-[#0C969C]">404</h1>
      <p className="text-xl mb-6">Página não encontrada</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#0A7075] rounded hover:bg-[#0C969C] transition-colors"
      >
        Voltar para Home
      </Link>
    </div>
  );
}

import React from "react";

export default function ForcaSVG({ errors }) {
  return (
    <svg height="200" width="150">
      {/* Base */}
      <line x1="10" y1="180" x2="140" y2="180" stroke="black" strokeWidth="4"/>
      {/* Poste vertical */}
      <line x1="40" y1="180" x2="40" y2="20" stroke="black" strokeWidth="4"/>
      {/* Poste horizontal */}
      <line x1="40" y1="20" x2="100" y2="20" stroke="black" strokeWidth="4"/>
      {/* Corda */}
      <line x1="100" y1="20" x2="100" y2="40" stroke="black" strokeWidth="4"/>
      
      {/* Cabeça */}
      {errors > 0 && <circle cx="100" cy="50" r="10" stroke="black" strokeWidth="3" fill="none"/>}
      {/* Corpo */}
      {errors > 1 && <line x1="100" y1="60" x2="100" y2="100" stroke="black" strokeWidth="3"/>}
      {/* Braço esquerdo */}
      {errors > 2 && <line x1="100" y1="70" x2="80" y2="90" stroke="black" strokeWidth="3"/>}
      {/* Braço direito */}
      {errors > 3 && <line x1="100" y1="70" x2="120" y2="90" stroke="black" strokeWidth="3"/>}
      {/* Perna esquerda */}
      {errors > 4 && <line x1="100" y1="100" x2="80" y2="130" stroke="black" strokeWidth="3"/>}
      {/* Perna direita */}
      {errors > 5 && <line x1="100" y1="100" x2="120" y2="130" stroke="black" strokeWidth="3"/>}
    </svg>
  );
}

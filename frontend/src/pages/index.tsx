import React from 'react';

const MiComponente: React.FC = () => {
  return (
    <div className="container">
      <header>
      <img src="/img/Logo.png" alt="Logo" className="Logo" style={{ maxWidth: '300px' }} />
    
      </header>
      <h1 style={{ color: '#88AB8E' }}>Cartera de Clientes Agricultores</h1>
      <table>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#AFC8AD' }}>Nombre del Agricultor</th>
            <th style={{ backgroundColor: '#AFC8AD' }}>Tipo de Cultivo</th>
            <th style={{ backgroundColor: '#AFC8AD' }}>Región</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>Maíz</td>
            <td>Valle de Mexicali</td>
          </tr>
          <tr>
            <td>Maria González</td>
            <td>Frijol</td>
            <td>Valle del Yaqui</td>
          </tr>
          <tr>
            <td>Carlos Rodríguez</td>
            <td>Tomate</td>
            <td>Valle de Culiacán</td>
          </tr>
          <tr>
            <td>Luisa Martínez</td>
            <td>Arroz</td>
            <td>Valle de Guadalupe</td>
          </tr>
          <tr>
            <td>José García</td>
            <td>Calabaza</td>
            <td>Valle de Toluca</td>
          </tr>
          <tr>
            <td>María López</td>
            <td>Pepino</td>
            <td>Valle de Querétaro</td>
          </tr>
          <tr>
            <td>Jorge Torres</td>
            <td>Papa</td>
            <td>Valle de San Luis</td>
          </tr>
          <tr>
            <td>Andrea Hernández</td>
            <td>Lechuga</td>
            <td>Valle de Sinaloa</td>
          </tr>
          <tr>
            <td>Pedro Sánchez</td>
            <td>Limón</td>
            <td>Valle de Acapulco</td>
          </tr>
          <tr>
            <td>Ana Ramírez</td>
            <td>Uva</td>
            <td>Valle de Ensenada</td>
          </tr>
          <tr>
            <td>Miguel González</td>
            <td>Zanahoria</td>
            <td>Valle de Oaxaca</td>
          </tr>
          <tr>
            <td>Sofía López</td>
            <td>Albahaca</td>
            <td>Valle de Tijuana</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MiComponente;

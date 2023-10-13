import React, { useEffect, useState } from 'react';
import data from './data.json';
import './index.css';

export const Building = () => {

  const [windowData, setWindowData] = useState(data);

  useEffect(() => {
    function fetchHour() {
      try {
        const agora = new Date();
        const horaAtual = agora.getHours();
        console.log(horaAtual);
      } catch (error) {
        console.error('ERR ao buscar as horas', error);
      }
    }
    fetchHour();
  }, []);

  const toggleLuz = (index) => {
    const updatedWindowData = [...windowData];
    updatedWindowData[index].luz = updatedWindowData[index].luz === 'apagada' ? 'acesa' : 'apagada';
    setWindowData(updatedWindowData);
  };


  const isDay = windowData.every((window) => window.luz === 'acesa');

  return (
    <section className="container">
      <div className="body-container">
        {windowData.map((window, index) => (
          <div key={index} className="window">
            <h1>{window.title}</h1>
            <p className="window-text">
              {window.body} {window.luz}
            </p>
            <button
              onClick={() => toggleLuz(index)}
              className="window-button"
            >
              Alternar Luz
            </button>
          </div>
        ))}
      </div>

      <div className="body-status">
        <h1>É {!isDay ? 'dia' : 'noite'}</h1>
      </div>
    </section>
  );
};

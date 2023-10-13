import React, { useEffect, useState } from 'react';
import './index.css';
import Window from '../../components/Window'
import Button from '../../components/Button'

export const Building = () => {
  const [isDay, setIsDay] = useState(null)
  const [luz, setLuz] = useState('apagada');

  const toggleLuz = () => {
    setLuz(luz === 'apagada' ? 'acesa' : 'apagada');
  };

  useEffect(() => {
    async function SetHours() {
      try {
        const agora = new Date();
        console.log('Horas:', agora);
        if (agora > 6 && agora < 18) {
          setIsDay(true);
        } else {
          setIsDay(false);
        }
      } catch (error) {
        console.error('Erro ao buscar as horas', error);
      }
    }

    SetHours();
  }, []);

const isDayOrNight = () => {
  if(isDay === true){
    return(setIsDay(false)
     )
  }else {
    return setIsDay(true)
  }
}

  return (
    <section className="container">
      <div className="body-container">
        <Window title="Janela 1" body="Conteúdo da janela 1" luz={luz} toggleLuz={toggleLuz} />
        <Window title="Janela 2" body="Conteúdo da janela 2" luz={luz} toggleLuz={toggleLuz} />
        <Window title="Janela 3" body="Conteúdo da janela 3" />
        <Window title="Janela 4" body="Conteúdo da janela 4" />
        <Window title="Janela 5" body="Conteúdo da janela 5" />
        <Window title="Janela 6" body="Conteúdo da janela 6" />
        <Window title="Janela 7" body="Conteúdo da janela 7" />
        <Window title="Janela 8" body="Conteúdo da janela 8" />
        <Window title="Janela 9" body="Conteúdo da janela 9" />
        <Window title="Janela 10" body="Conteúdo da janela 10" />
      </div>

      <div className="body-status">
      <h1>É {isDay === null ? 'carregando...' : isDay ? 'dia' : 'noite'}</h1>
      <Button onClick={isDayOrNight} text='isDayOrNight' />
      </div> 
    </section>
  );
};
  


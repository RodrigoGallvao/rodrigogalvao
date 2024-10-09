import React, { useRef } from 'react';
import './App.scss';

import { 
  Home,
  SobreMim,
  Habilidades,
  Projetos,
  Contato,
} from './Blocks';

import Logo from "./Assets/Logo.png";

function App() {
  const homeRef = useRef(null);
  const sobreMimRef = useRef(null);
  const habilidadesRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="MainWrapper">
      <Home ref={homeRef}/>

      <nav className='hotbar'>
        <div>
          <button onClick={() => handleClick(homeRef)}>
            <img src={Logo} alt="Logo."/>
          </button>

          <div className="Links">
            <button onClick={() => handleClick(sobreMimRef)}> 
              Sobre Mim 
              <hr/>
            </button>
            <button onClick={() => handleClick(habilidadesRef)}> 
              Habilidades 
              <hr/>
            </button>
            <button onClick={() => handleClick(projetosRef)}> 
              Projetos 
              <hr/>
            </button>
            <button onClick={() => handleClick(contatoRef)}> 
              Contato 
              <hr/>
            </button>
          </div>
        </div>
      </nav>

      <SobreMim ref={sobreMimRef}/>
      <Habilidades ref={habilidadesRef}/>
      <Projetos ref={projetosRef}/>
      <Contato ref={contatoRef}/>
    </div>
  );
}

export default App;

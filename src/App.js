import React, { useRef, useState, useEffect } from 'react';
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
  const mainWrapperRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (mainWrapperRef.current) {
        setScrollY(mainWrapperRef.current.scrollTop); 
      }
    };

    const wrapper = mainWrapperRef.current;
    wrapper.addEventListener('scroll', handleScroll);

    return () => {
      wrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="MainWrapper" ref={mainWrapperRef}> 

      <nav className={`hotbar ${scrollY < 100 && "darker"}`}>
        <div>
          <button onClick={() => {scrollY > 100 && handleClick(homeRef)}}>
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

      <Home ref={homeRef} scrollY={scrollY < 100}/>
      <SobreMim ref={sobreMimRef}/>
      <Habilidades ref={habilidadesRef}/>
      <Projetos ref={projetosRef}/>
      <Contato ref={contatoRef}/>
    </div>
  );
}

export default App;

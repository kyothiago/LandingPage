import React from 'react';
import FormRegister from './components/FormRegister';
import Footer from './components/Footer';
import Paragraphy from './components/commons/Text/Paragraphy';
import Title from './components/commons/Text/Title';
import video from './Assets/video1.jpg';
import video1 from './Assets/3060.jpg';
import video2 from './Assets/3090.jpg';
import video3 from './Assets/6700.jpg';
function App() {
  return (
    <>
      <Title>
        Ganhe até 50% de desconto!
      </Title>
      <div className="foto">
        <div className="caixaImg alinhaDir">
        <img src={video} alt="Placa de vídeo 1660" className="objetoImg" />
        </div>
        <div className="caixaImg">
        <img src={video1} alt="Placa de vídeo 3060" className="objetoImg" />
        </div>
        <div className="caixaImg alinhaDir">  
        <img src={video2} alt="Placa de vídeo 3090" className="objetoImg"/>
        </div>
        <div className="caixaImg">
        <img src={video3} alt="Placa de vídeo 6700" className="objetoImg"/>
        </div>
      </div>
      <Paragraphy>
      <h4>Cadastre-se para receber nossas ofertas por e-mail!</h4>
      <FormRegister />
      </Paragraphy>
      <Footer />
    </>
  );
}

export default App;

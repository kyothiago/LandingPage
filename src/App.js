import React from 'react';
import FormRegister from './components/FormRegister';
import Footer from './components/Footer';
import Paragraphy from './components/commons/Text/Paragraphy';
import Title from './components/commons/Text/Title';
import video from './Assets/video1.jpg';
import video1 from './Assets/3060.jpg';
import video2 from './Assets/3090.jpg';
import video3 from './Assets/6700.jpg';
import { ImgStyles } from './components/commons/ImgStyles';

function App() {
  return (
    <>
      <Title>
        Ganhe até 50% de desconto!
      </Title>
      <>
       <ImgStyles src={video} alt="Placa de vídeo 1660" />
       <ImgStyles src={video1} alt="Placa de vídeo 3060" />
       <ImgStyles src={video2} alt="Placa de vídeo 3090" />
       <ImgStyles src={video3} alt="Placa de vídeo 6700" />
      </>
      <Paragraphy>
      Cadastre-se para receber nossas ofertas por e-mail!
      <FormRegister />
      </Paragraphy>
      <Footer />
    </>
  );
}

export default App;

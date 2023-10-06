import React from 'react';
//import Carousel from 'react-bootstrap/Carousel';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de importar o CSS do Bootstrap

import './home.css';
import cheetaImage from '../../assets/cheeta.jpg';
import harpiaImage from '../../assets/harpia.jpg';

const Home = () => {
    return (
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cheetaImage}
              alt="Cheeta"
            />
            <Carousel.Caption>
              <h3>Cheeta</h3>
              <p>Descrição da imagem Cheeta.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={harpiaImage}
              alt="Harpia"
            />
            <Carousel.Caption>
              <h3>Harpia</h3>
              <p>Descrição da imagem Harpia.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };
  
  export default Home;
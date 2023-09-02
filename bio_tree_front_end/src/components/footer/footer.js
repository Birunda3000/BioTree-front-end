import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/biotree-logo.png" alt="Logo do Biotree" />
            <h1>Biotree</h1>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/artigos">Artigos</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Siga-nos nas redes sociais:</h3>
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2023 Biotree. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import './footer.css';
import Image from 'next/image';
import footer_image from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        className="footer-img"
        src={footer_image}
        alt="BioTree_logo"
      />
      <p className="footer-text">BioTree®™</p>
    </footer>
  );
};

export default Footer;


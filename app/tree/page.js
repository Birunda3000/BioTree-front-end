import Image from 'next/image';
import diagram from "@/assets/diagrama_de_exemplo.png";
import diagram2 from "@/assets/imagem_tre.png";
import "./tree.css";

export default function Tree() {
    return (
      <>
          <h1>Tree</h1>
          <div className="tree-container">
            <Image src={diagram} alt="diagrama_de_exemplo"/>
            <Image src={diagram2} alt="imagem_tre"/>
          </div>
      </>
    );
}
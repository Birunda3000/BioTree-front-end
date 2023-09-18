import React from "react";
import "./taxon_card.css";
import placeholderImage from "../../assets/placeholder-image.png";

function TaxonCard() {
    return (
        <>
            <div className="taxon-card">
                <div className="taxon-card-header">
                    <span className="taxon-name">Homo Sapiens</span>
                    <span className="taxon-commom-name">Humano</span>
                </div>
                <span className="taxon-type">Espécie</span>
                
                <div className="taxon-card-body">
                    
                    <img className="taxon-card-image" src={placeholderImage} alt="placeholder-image"/>
                 
                    <div className="taxon-text-container">

                        <div className="info-text teste">
                            <p><b>Origin: </b>8000 anos atras</p>
                                <div>
                                    <a className="update-button">✎ Delete</a>
                                    <a className="delete-button">🗑 Update</a>
                                </div>
                        </div>
                        <p className="info-text"><b>Extintion: </b>80 anos atras</p>
                        <p className="taxon-card-description">
                            Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
                            Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.
                            A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                            Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
                            Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.
                            A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                        </p>
                        
                        <ul className="taxon-tag-list">
                            <li className="taxon-tag"> <a href="https://www.google.com">Social</a> </li>
                            <li className="taxon-tag"> <a href="https://www.google.com">Carnivoro</a> </li>
                            <li className="taxon-tag"> <a href="https://www.google.com">Burro</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="taxon-card-separator"/>
        </>
    )
}

export default TaxonCard;
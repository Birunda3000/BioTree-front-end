import React from "react";
import placeholderImage from "../../assets/silvio_santos.jpg";
import "./taxon_card.css";

function TaxonCard() {
    return (
        <>
            <div className="taxon-card">
                <div className="taxon-card-header">
                    <span className="taxon-name">Homo Sapiens Sapiens</span>
                    <span className="taxon-commom-name">Humano</span>
                </div>
                <span className="taxon-type">Subespécie</span>

                <div className="taxon-card-body">

                    <img className="taxon-card-image" src={placeholderImage} alt="placeholder-image" />

                    <div className="taxon-text-container">

                        <div className="info-text teste">
                            <p><b>Origin: </b>200 000 anos atras</p>
                            <div>
                                <a className="update-button">✎ Update</a>
                                <a className="delete-button">🗑 Delete</a>
                            </div>
                        </div>
                        <p className="info-text"><b>Extintion: </b>Ainda vivo</p>
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
                            <li className="taxon-tag"> <a href="https://www.google.com">Onivoro</a> </li>
                            <li className="taxon-tag"> <a href="https://www.google.com">Bipede</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxonCard;
import React from "react";
import "./taxon_card.css";
import placeholderImage from "../../assets/placeholder-image.png";

function TaxonCard() {
    return (
        <>
            <div className="taxon-card">
                <div className="taxon-card-header">
                    <span className="taxon-name">Homo Sapiens</span>
                    <span className="taxon-commom-name">Zumano</span>
                </div>
                <span className="taxon-type">Espécie</span>
                
                <div className="taxon-card-body">
                    
                    <img className="taxon-card-image" src={placeholderImage} alt="placeholder-image"/>
                    
                    <div className="taxon-text-container">

                        <div className="info-text teste">
                            <p><b>Origin: </b>8000 anos atras</p>
                                <div>
                                    <a className="update-button">✎</a>
                                    <a className="delete-button">🗑</a>
                                </div>
                        </div>
                        <p className="info-text"><b>Extintion: </b>80 anos atras</p>
                        <p className="taxon-card-description">
                            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
                            Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
                        </p>
                        
                        <ul className="taxon-tag-list">
                            <li className="taxon-tag"> <a href="https://www.google.com">Social</a> </li>
                            <li className="taxon-tag"> <a href="https://www.google.com">Carnivoro</a> </li>
                            <li className="taxon-tag"> <a href="https://www.google.com">Burro</a> </li>
                        </ul>

                    </div>
                
                </div>

            </div>
        </>
    )
}

export default TaxonCard;
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
                <div className="taxon-card-body">
                    <img className="taxon-card-image" src={placeholderImage} alt="placeholder-image"/>
                    <div className="taxon-card-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nobis veniam ea accusantium autem, animi molestias aliquam est, illum atque exercitationem consectetur sapiente labore fugiat quidem laudantium velit dolore quasi!
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxonCard;
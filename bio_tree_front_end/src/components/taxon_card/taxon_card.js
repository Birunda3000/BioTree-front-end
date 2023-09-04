import React from "react";
import "./taxon_card.css";

function TaxonCard() {
    return (
        <>
            <div className="taxon-card">
                <div className="taxon-card-header">
                    <span className="taxon-name">Taxon name</span>
                    <span className="taxon-commom-name">Taxon rank</span>
                </div>
            </div>
        </>
    )
}

export default TaxonCard;
import Image from "next/image";
import place_holder_image from "../../assets/silvio_santos.png";
import "./taxon_card.css";

function TaxonCard() {
    return (
        <>
            <div className="taxon-card">
                <div className="taxon-card-header">
                    <span className="taxon-name">Homo Sapiens Sapiens</span>
                    <span className="taxon-commom-name">Humano</span>
                </div>
                <span className="taxon-type">Subespecies</span>

                <div className="taxon-card-body">

                    <Image className="taxon-card-image" src={place_holder_image} alt="placeholder-image" />

                    <div className="taxon-text-container">

                        <div className="info-text teste">
                            <p><b>Origin: </b>200 000 years ago</p>
                            <div>
                                <a className="update-button">✎ Update</a>
                                <a className="delete-button">🗑 Delete</a>
                            </div>
                        </div>
                        <p className="info-text"><b>Extintion: </b>Alive</p>
                        <p className="taxon-card-description"> The Homo sapiens sapiens, often referred to as the "modern human," is the dominant species on planet Earth. Characterized by a unique ability for abstract thinking, complex communication, and advanced technology, Homo sapiens sapiens stands out among all other life forms. Its remarkable evolution over hundreds of thousands of years has allowed for the development of complex societies, diverse cultures, and an extraordinary capacity to adapt to different environments. Possessing a highly developed brain, this species has explored the frontiers of knowledge and creativity, leaving a profound impact on the planet and their own lives.
    In addition to its remarkable intelligence, Homo sapiens sapiens is characterized by a variety of distinct physical features, including an upright posture, dexterous hands with opposable thumbs, and a proportionally large brain relative to body size. These features have enabled humans to develop complex tools, master agriculture and animal domestication, and create highly organized societies. The ability to create, learn, adapt, and cooperate has made Homo sapiens sapiens the most influential species in the history of Earth, shaping the natural world and building civilizations that span from the earliest villages to today's global metropolises.
                        </p>

                        <ul className="taxon-tag-list">
                            <li className="taxon-tag"> <a href="https://pt.wikipedia.org/wiki/Animal_social">Social</a> </li>
                            <li className="taxon-tag"> <a href="https://pt.wikipedia.org/wiki/Omn%C3%ADvoro">Omnivore</a> </li>
                            <li className="taxon-tag"> <a href="https://pt.wikipedia.org/wiki/Bipedismo">Biped</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxonCard;
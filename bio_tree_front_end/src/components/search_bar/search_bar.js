import React from "react";
import "./search_bar.css";

function SearchBar() {
    return (
        <>
            <div className="search-bar-add-button">
                <div className="search-bar">
                    <input className="search-text" type="text" placeholder="Search...">
                    </input>
                    <select className="search-select">
                        <option value="Subespecie">Subespecies</option>
                        <option value="Species">Species</option>
                        <option value="Gender">Gender</option>
                        <option value="Family">Family</option>
                        <option value="Order">Order</option>
                        <option value="Class">Class</option>
                        <option value="Phylum">Phylum</option>
                        <option value="Kingdom">Kingdom</option>
                        <option value="Domain">Domain</option>
                        <option value="Life">Life</option>
                    </select>
                    <button className="search-button"
                        type="submit">🔍︎</button>
                </div>
                <a className="add-button"><b>+</b>Add</a>
            </div>
        </>
    )
}

export default SearchBar;
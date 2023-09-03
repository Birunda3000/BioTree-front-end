import React from "react";
import "./search_bar.css";

function SearchBar() {
    return (
        <>
            <div className="search-bar">
                <input className="search-text" type="text" placeholder="Search..">
                </input>
                <select className="search-select">
                    <option value="name">Species</option>
                    <option value="id">Gender</option>
                </select>
                <button className="search-button"
                type="submit">🔍︎</button>
            </div>
        </>
    )
}

export default SearchBar;
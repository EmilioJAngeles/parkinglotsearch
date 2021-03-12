import React, { useState } from 'react';

export function SearchBar(props){
    const [location, setLocation] = useState(props.location || '');

    function SearchLocation(e){
        if(typeof props.Search == 'function'){
            props.Search(location);
        }
        console.log(location);
        e.preventDefault();
    }
    
    return (
        <form onSubmit={SearchLocation}>
            <div className = "App">
                <input
                    onChange={(e) => setLocation(e.target.value)}
                    type = "text"
                    placeholder = "Location"
                />
                <button 
                    className = "button is-static" onClick={SearchLocation}>Search
                </button>
            </div>
        </form>
        
    );
}
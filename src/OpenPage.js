import React from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';

export function OpenPage(){
    const history = useHistory();

    function Search(location){
        const urlEncodedLocation = encodeURI(location);
        history.push(`/searchresults_location=${urlEncodedLocation}`);
    }

    return (
        <SearchBar Search={Search}/>
    );
}
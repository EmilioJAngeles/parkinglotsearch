import React from 'react';
import styles from './SearchResults.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResult } from '../SearchResults/SearchResult';

export function SearchResults() {
    return(
        <div>
            <SearchBar/>
            <p>Parking Lots in <strong>San Francisco</strong></p>
            <div className = {styles['search-results']}>
                <SearchResult/>
                <SearchResult/>
                <SearchResult/>
                <SearchResult/>
            </div>
        </div>
    );
}
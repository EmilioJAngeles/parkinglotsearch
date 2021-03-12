import React from 'react';
import styles from './SearchResult.module.css';

export function SearchResult(){
    return(
        <div className = {styles['search-result']}>
            <img src = 'https://via.placeholder.com/150' alt = 'lot' className = {styles['lot-image']}/>
            <div className = {styles['lot-info']}>
                <h1>Lot Name</h1>
                <p>4.5 Stars</p>
                <p>350 Reviews</p>
                <p>link to yelp page</p>
            </div>
            <div className = {styles['lot-address']}>
                <p>Street Number</p>
                <p>City, State Zip Code</p>
            </div>
        </div>
    );
}
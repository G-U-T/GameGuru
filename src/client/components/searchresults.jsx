import React from 'react';
import { useLocation } from 'react-router-dom';


export default function SearchResults() {
   const location = useLocation();
    console.log(location);
    console.log(location.state);
   const result = location.state?.result;
    console.log(result);
    return (
        <div>
            <h2>Search Results</h2>
            {result?.length > 0 ? (
                result.map((game, index) => (
                    <div key={index}>
                        <h3>{game.title}</h3>
                        <p>{game.platform}</p>
                    </div>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div> 
    )
}
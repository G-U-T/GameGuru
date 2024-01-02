import React, {useState, useEffect} from "react";
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';
export const SearchBar = () => {
    const [input, setInput] = useState('');
    
    const fetchData = async () => {
        const response = await fetch(`/api/consoles/${input}`);
       
        const result = await response.json();
        console.log(result);
    }

    const handleSearch = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        if(input) {
            fetchData();
        }
    }, [input]);

        return(
    <>
      <div className="input-wrapper">
        <FaSearch  id="search-icon"/>
        <input 
        type="text" 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => handleSearch(e)} />    
      </div>
    </>
  );
       
    }
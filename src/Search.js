import React from 'react';

 function Search({ handleInput}) {
  
    return (
        <div className="search-input">
          <i class="fas fa-search"></i>
          <input className="input" type="text"  onChange={handleInput} placeholder="search for a movie"/>
        </div>
      );
    }
    
    export default Search;  
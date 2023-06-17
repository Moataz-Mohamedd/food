import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PreviousSearches = () => {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'salad', 'ice cream', 'lassange', 'soup']

  return (
    <div className='previous-searches section'>
    <h2>Previous Searches</h2>
    <div className="previous-searches-container">
        {
            searches.map((Search,index)=>{
                return(
                    <div key={index} style={{animationDelay : index*0.2 +"s"}} className="search-item">{Search}</div>
                )
            })
        }
    </div>
    <div className="search-box">
        <input type="text" placeholder='Search...' />
        <button className="btn">
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    </div>
</div>
  )
}

export default PreviousSearches

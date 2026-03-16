import React, { use } from 'react';
import './Countries.css'

const Countries = ({CountryData}) => {

    const countries = use(CountryData)
    console.log(countries);
    
    return (
        <div className='card'>

            <h1>All Countries Count : {countries.length}</h1>
            
        </div>
    );
};

export default Countries;
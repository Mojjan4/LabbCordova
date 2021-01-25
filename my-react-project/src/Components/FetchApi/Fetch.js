import {useEffect, useState} from 'react';

const listStyle = {
    border: 'solid 1px',
    borderRadius: '8px',
    fontSize: '1.2rem',
    margin: '5px'
}

const wrapper = {
    display: 'flex',
    flexWrap: 'wrap',
}

function Fetch (){
    useEffect(() => {
        fetchBrews();
    },[]);
    
    const [Brewers, setBrewes] = useState([]);

    const fetchBrews = async () => {
        fetch('https://api.openbrewerydb.org/breweries')
        .then((response) => response.json())
        .then((result) => {
            setBrewes(result)
        })
    }
    return (
        <div style={wrapper}>
            {Brewers && (
                Brewers.map((brew) => (
                    <div style={listStyle} key={brew.id}>
                        Namn: {brew.name}
                        <br/>
                        Stad: {brew.city}
                    </div>
                ))
        )}
        <div>
            
        </div>

        </div>
        
    )
}


export default Fetch
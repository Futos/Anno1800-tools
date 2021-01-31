import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {popGroup} from '../../assets/dummy/civData';


function Home() {
    const [searchValue, setSearchValue] = useState('leer');

    const onInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const populationHTML = [];

    popGroup.forEach((element) => {
        if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
            populationHTML.push(<li className="list-group-item"><a href={element.link}>{element.name}</a></li>);
        }
    });

    let popReturnHTML = 'Keine Ergebnisse gefunden';
    if (populationHTML && populationHTML.length > 0) {
        popReturnHTML = populationHTML;
    }

    return (
        <>
            <Header/>
            <main className="container pt-5">
                <h1>Home</h1>
                <Search valueOutput={onInputChange} />
                <h3 className="pt-5 pb-2">Ergebnisse:</h3>
                <ul className="list-group">
                    {popReturnHTML}
                </ul>
            </main>
        </>
    );
}

export default Home;
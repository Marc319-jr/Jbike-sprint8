import React from 'react';
import SmallCard from './SmallCard';

function Top(){
    return(
        <div className = "rowWrap">
            <SmallCard titulo = "Pelis en la base" data = "25" icono = "♥" />
            <SmallCard titulo = "Pelis en la base" data = "25" icono = "♥"/>
            <SmallCard />
        </div>

    )
}




export default Top
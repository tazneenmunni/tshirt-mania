import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('ring')

const Grandpa = () => {
    // const house = 10;
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h4>GrandPa</h4>

                <p>House: {house} <button onClick={handleBuyHouse}>Buy a house</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;
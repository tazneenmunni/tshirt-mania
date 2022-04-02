import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);

    const handleHouseIncrease = () => {
        setHouse(house + 1)
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <button onClick={handleHouseIncrease}>Buy</button>
        </div>
    );
};

export default Aunty;
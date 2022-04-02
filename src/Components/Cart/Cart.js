import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1.Element variable
    //2.ternary operator: condition ? true :false
    //3.&& operator (shorthand)
    let command;
    if (cart.length === 0) {
        command = <p>Please add al least one item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p>Thanks for adding items</p>
    }
    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    {tShirt.name}</p>)
            }
            {command}
            {cart.length === 0 || <p className='bg-color'>Yay you're buying</p>}
            {cart.length === 3 && <div className='bg-color'>
                <h3>Trigonal</h3>
            </div>}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button>
                Review order
            </button>}
        </div>
    );
};

export default Cart;
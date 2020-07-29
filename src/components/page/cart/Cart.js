import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Cart.css'

import { API } from "../../../config";
import { getCart , removeItem } from './cartHelpers';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h2 className='mb-5'>Your cart has {`${items.length}`} items</h2>
                <div className='cart-product-box mob-view'>
                {items.map((product, i) => (
                    
                        <div className='cart-inner-box'>
                        <img className='cart-img' src={`${API}/products/photo/${product._id}`} alt={product.name}/>
                            <h3>{product.name}</h3>
                            <h4>{product.price}</h4>
                            <button
                            onClick={() => {
                                window.location.reload()
                            removeItem(product._id);
                            setRun(!run); 
                            }}
                            className="btn btn-outline-danger mt-2 mb-2"
                            >
                           <i class="fas fa-trash-alt"></i>
                           </button>
                        </div>
                   
                ))}
                </div>
            </div>
        );
    }; 

    const getTotal = () => {
        return items.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
            <div className="main-cart-display">
                <div className="cart-items mob-view">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>

                <div className="checkout-items mob-view">
                    <h2 className="mb-4">Your cart summary</h2>
                    <h2 className='mb-5'>Total: ${getTotal()}</h2>
                    <Link to='/checkout'><button className='checkout-button'>Checkout</button></Link>
                </div>
            </div>
    );
};

export default Cart;
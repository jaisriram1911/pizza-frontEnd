import React, { useState, useEffect } from 'react';

import './Home.css'

import { getProducts } from '../apiPage';
import Card from '../Card/card';
import Menu from '../navbar/Menu';
import CategoryHome from './category component/category';
import { Link } from 'react-router-dom';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    useEffect(() => {
        loadProductsBySell();
    }, []);

    return (
        <div>
        <div className='hero-main-container'>
        <div className='hero'>
            <div className='hero-text-content'>
            <h1>Feeling Hungery?</h1>
            <h1>just one click away</h1>
            <p>we serve you the best pizza at your doorsteps within 20min.</p>
            <Link to='/shop'><button>Order Online</button></Link>
            </div>
            <div className='hero-img'>
                <img src={require('./home-images/hero-pizza.png')} alt='hero-image' />
            </div>
        </div>
        </div>
        <div className='top-seller'>
        <h1 className='top-seller-title'>Our Top Seller</h1>
        <div className='home-card'>
            {productsBySell.map((product ,i) =>(
                <div key={i} >
                <Card product={product} />
                </div>
            ))}
            </div>
        </div>
        <div className='home-category'>
        <h1>Our category</h1>
        <div className='home-category-inner-box'>
        <a href='/shop'><CategoryHome categoryImage='veg.png' categoryTitle='Veg Pizza' /></a>
        <CategoryHome categoryImage='non-veg.png' categoryTitle='Non-Veg Pizza' />
        <CategoryHome categoryImage='pepsi.png' categoryTitle='Beverages' />
        </div>
        </div>
        </div>
    );
};

export default Home;
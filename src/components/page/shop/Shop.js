import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Cart from "../cart/Cart";
import Card from "../Card/card";
import { getCategories, getFilteredProducts,veg , nonVeg , beverages} from "../apiPage";
import { getCart , removeItem } from '../cart/cartHelpers';
import Checkout from '../checkout/Checkout';

import './Shop.css'

const Shop = () => {

    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);
    
    const [categories, setCategories] = useState([]);
    const [vegPizza , setVegPizza] = useState([]);
    const [nonVegPizza , setNonVegPizza] = useState([]);
    const [beverage , setBeverages] = useState([]);
    const [error, setError] = useState(false);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };
    
    const vegPizzaProduct = () =>{
        veg().then(data =>{
            if(data.error){
                setError(data.error);
            }else{
                setVegPizza(data)
            }
        })
    }

    const nonVegPizzaProduct = () =>{
        nonVeg().then(data =>{
            if(data.error){
                setError(data.error);
            }else{
                setNonVegPizza(data)
            }
        })
    }

    const beveragesProduct = () =>{
        beverages().then(data =>{
            if(data.error){
                setError(data.error);
            }else{
                setBeverages(data)
            }
        })
    }
    
    useEffect(() => {
        setItems(getCart());
        init();
        vegPizzaProduct();
        nonVegPizzaProduct();
        beveragesProduct();
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                {items.map((product, i) => (
                    <div>
                        {product.name}
                        
                    </div>
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty.
        </h2>
    );
 


    return (
            <div className="shop-main-container">
            <div className='shop-nav'>
                <a href='#veg'>Veg</a>
                <a href='#nonVeg'>Non-veg</a>
                <a href='#beverage'>Beverage</a>
            </div>
            <div className='main-container'>
            <div className='shop-inner-display'>
            <div id='veg'>
            <h1 className='pizza-title'>Veg Pizza</h1>
              <div className="product-display">
                  {vegPizza.map((product , i) =>(
                      <div key={i}  className='pizza-view'>
                          <Card product={product} />
                      </div>
                  ))}
                  </div>
              </div>
              <div id='nonVeg'>
            <h1 className='pizza-title mt-5'>Non-Veg Pizza</h1>
              <div className="product-display">
                  {nonVegPizza.map((product , i) =>(
                      <div key={i}  className='pizza-view'>
                          <Card product={product} />
                      </div>
                  ))}
                  </div>
              </div>
              <div id='beverage'>
            <h1 className='pizza-title mt-5'>Beverages</h1>
              <div className="product-display">
                  {beverage.map((product , i) =>(
                      <div key={i}  className='pizza-view'>
                          <Card product={product} />
                      </div>
                  ))}
                  </div>
              </div>
              </div>
            </div>
            </div>
    );
};

export default Shop;
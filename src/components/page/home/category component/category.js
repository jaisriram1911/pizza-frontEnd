import React from 'react'

import './category.css'

const CategoryHome = props =>{
    return(
        <div className='outer-card'>
        <div className='category-box'>
            <img src={require(`../home-images/${props.categoryImage}`)} alt={props.categoryImage} />
            <button>{props.categoryTitle}</button>
        </div>
        </div>
    )
} 

export default CategoryHome;
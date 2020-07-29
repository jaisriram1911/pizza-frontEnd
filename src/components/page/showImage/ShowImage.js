import React from "react";
import { API } from "../../../config";

import './ShowImage.css'

const ShowImage = ({ item, url }) => (
    <div>
        <img
            className='product-img'
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
        />
    </div>
);

export default ShowImage;

import React from 'react';
import { useStateValue} from "./StateProvider";
import './Product.css';



function Product({id, title, image, price, rating}){

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket....
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };


    return <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>₹{price}</small>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}
            </div>  
        </div>
        

        <img src={image} alt="" />
        <button onClick={addToBasket}> Add to basket</button>            
    </div>;
    
}

export default Product;

//
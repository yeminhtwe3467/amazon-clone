import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvide';

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log('this is basket', basket)
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><StarIcon/></p>
                    ))}
                </div>
            </div>
            <div className="product__img">
                <img 
                    src={image}
                    alt=""
                />
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product

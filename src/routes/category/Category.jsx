import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from "../../utils/Container";
import { Link } from 'react-router-dom';
import {FiHeart} from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import "./Category.scss";
import { BsFillSuitHeartFill } from 'react-icons/bs'


const Category = () => {
    function trimDescription(str) {
        return str.split(" ").slice(0, 5).join(" ") + "..."
    }
    function addToLike(product){
        dispatch({product, type: "LIKE_PRODUCT"})
      }
    function removeFromLikedProducts(product){
    dispatch({id: product.id, type: 'REMOVE_FROM_LIKED'})
    }
    const categoryId = useParams();
    const dispatch = useDispatch();
    const [data, isLoading] = useFetchData(`/categories/${categoryId.id}/products`);
    const {likedProducts} = useSelector(state => state.likeReducer)
    return (
        <Container>
            <div className='category-box'>
            { !isLoading ?
                        data.map(product =>
                            <div className='product-item' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img className='product-item__image' src={product.images[0]} alt="" />
                                    <h3>{product.title}</h3>
                                </Link>
                                <div className='product-info'>
                                    <div>
                                        <p>{trimDescription(product.description)}</p>
                                        <strong>{product.price}$</strong>
                                    </div>
                                    {likedProducts.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={() => removeFromLikedProducts(product)} style={{color: 'red'}}/> : <FiHeart onClick={() => addToLike(product)}/>}
                                </div>
                            </div>
                        )
                        : <h1 className='loading'>Loading...</h1>
                    }
            </div>
        </Container>
    );
}

export default Category;
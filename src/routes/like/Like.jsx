import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Container from '../../utils/Container';




const Like = () => {
    const {likedProducts} = useSelector(state => state.likeReducer)
  return (
    <div>
        <Container>
        <div className="search-results__wrapper">
            {
                likedProducts.map(i => 
                    <div className='search-product-item' key={i.id}>
                        <Link to={`/product/${i.id}`}>
                            <img width={300} src={i.images?.at(0)} alt="" />
                        </Link>
                        <div>
                            <h2>{i.title}</h2>
                            <p>{i.description}</p>
                            <strong>${i.price}</strong>
                        </div>
                    </div>    
                )
            }
        </div>
        </Container>
    </div>
  )
}

export default Like


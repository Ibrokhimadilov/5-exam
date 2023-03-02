import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import "./SearchResult.scss"
 
const SearchResult = () => {
    const productInfo = useParams();
    var [data, isLoading] = useFetchData(`/products/?title=${productInfo.productName}&categoryId=${productInfo.category}`)


    return (
    <section className='search-results'>
      <Container>
        <div className="search-results__wrapper">
            {!isLoading?
                data.map(i => 
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
                :
                <p>Loading...</p>
            }
        </div>
      </Container>
    </section>
  )
}

export default SearchResult

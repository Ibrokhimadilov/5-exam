import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import "./SearchResult.scss"
import { useState, useEffect } from 'react';
import instance from '../../api/instance';
 
const SearchResult = () => {
    const [lowerSelect, setLowerSelect] = useState("");
    const [upperSelect, setUpperSelect] = useState("");
    const productInfo = useParams();
    const category = useParams();
    var [data, isLoading] = useFetchData(`/products/?title=${productInfo.productName}&categoryId=${productInfo.category}`)                                                   
    const prices = [1, 10, 100, 1000, 10000, 100000]
    const [filterResult, setFilterResult] = useState([])

    useEffect(() => {
        if(lowerSelect > upperSelect){
            setLowerSelect(upperSelect);
            setUpperSelect(lowerSelect);
        }


        instance.get(`products/?title=${productInfo.productName}&price_min=${lowerSelect}&price_max=${upperSelect}&categoryId=${productInfo.category}`)
        .then(res => setFilterResult(res.data))
    }, [lowerSelect, upperSelect]);

    if(filterResult.length > 0){
        data = filterResult
    }

    return (
    <section className='search-results'>
        <div className="search-filters">
            <select value={lowerSelect} onChange={(e) => setLowerSelect(e.target.value)}>
            {
                prices.map(price => 
                    <option value={`${price}`}>{price}</option>    
                )
            }
            </select>
            <select value={upperSelect} onChange={(e) => setUpperSelect(e.target.value)}>
            {
                prices.map(price => 
                    <option value={`${price}`}>{price}</option>    
                )
            }
            </select>
        </div>
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

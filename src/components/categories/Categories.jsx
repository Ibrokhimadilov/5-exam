import React, { useEffect, useState } from 'react'
import instance from "../../api/instance";
import Container from '../../utils/Container';
import { Link } from 'react-router-dom'; 
import "./Categories.scss";
import useFetchData from '../../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
import i18n from "../../language/i18next";

const Categories = () => {
  const [data, isLoading] = useFetchData("/categories");
  const {t} = useTranslation();

  return (
    <section className='categories'>
      <Container>
        <div className='categories-wrapper'>
          {!isLoading?
            data.map(category => 
              <Link to={`/category/${category.id}`} className='category-item' key={category.id}>
                <div className='category__image-wrapper'>
                  <img className='category-image' src={category.image} alt="" />
                </div>
                <h3>{category.name}</h3>
              </Link>  
            ) 
            :
            <p>Loading...</p> 
          }
        </div>
      </Container>
    </section>
  )
}

export default Categories

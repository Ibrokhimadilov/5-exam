import React from 'react'
import './Product.scss'
import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import Container from '../../utils/Container'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from "../../language/i18next";
import { useSelector } from 'react-redux'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { FiHeart } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react'
import instance from '../../api/instance'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'



const Product = () => {
    const productIdData = useParams()
    const [data, isLoading] = useFetchData(`/products/${productIdData.id}`)   
    const {t} = useTranslation();
    const {likedProducts} = useSelector(state => state.likeReducer)
    const dispatch = useDispatch();
    const [categoryData, setCategoryData] = useState([])
      useEffect(() => {
        instance.get(`/products/?categoryId=${data?.category?.id}`)
          .then(response => { 
            setCategoryData(response.data)
          })
          .catch(
            err => { 
            console.log(err) 
            })
      }, [data?.category?.id])

    function addToLike(product){
      dispatch({product, type: "LIKE_PRODUCT"})
    }
    function removeFromLikedProducts(data){
      dispatch({id: data.id, type: 'REMOVE_FROM_LIKED'})
    }
    function trimDescription(str){
      return str.split(" ").slice(0, 10).join(" ") + "..."
    }
    console.log(i18n);
  return (
    <section className='single-product'>

       <Container>
       <div className="product-items-wrapper">
                <Link to="/"><BsFillArrowLeftSquareFill /></Link>
                <Link to="/"><p className='product-items-wrapper__home-page-link'>{t("to_home")}</p></Link>
            </div>
            <div className='product-box'>
                <div className="product-box__img-div">
                    <img src={data.images?.at(0)} alt="" />
                </div>
                <div className="product-box__items">
                    <p className='product-box__items__text'>Condition:
                        {data.description}
                    </p>
                    <h2 className='product-box__items__title'>Model: {data.title}</h2>
                    <p className='product-box__items__carier'>Carrier: Cllasik</p>
                    <p className='product-box__items__id'>Quantity: {data.id}</p>
                    <div className='product-box__price-div'>
                        <div className='product-box__price-div-items-box'>
                            <p className='product-box__price-div__pp'>Price:</p>
                            <strong className='product-box__price-div__price'>US {data.price}$</strong>
                            <p className='product-box__price-div__text'>No Interest if paid in full in 6 mo on $99+*</p>
                        </div>
                        <div className='product-box__price-div__btns'>
                            <button className='product-box__price-div__btn1'>Buy It Now</button>
                            <button className='product-box__price-div__btn2'>Add to cart</button>
                            {likedProducts.find(p => p?.id === data?.id) ? <button className='btn3-red btn3' onClick={() => removeFromLikedProducts(data)}>{t("remove_like")}</button> : <button className='btn3-default btn3' onClick={() => addToLike(data)}>{t("add_like")}</button>}
                          </div>
                    </div>
                </div>
            </div>
        <h1>{t("swiper")}</h1>
       <Swiper
       className='swiper'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        {!isLoading?
            categoryData?.map(product => 
              <SwiperSlide>
              <div className='product-item' key={product.id}>
               <Link to={`/product/${product.id}`}>
               {
          product.images[0] && product.images[0].startsWith("https://") ?   
          <img className='product-item__image' src={product.images[0]} alt="" />
        :
       <img className='product-item__image' src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
        }
                <h3>{product.title}</h3>
               </Link>
               <div className='product-info'>
                 <div>
                  <p>{trimDescription(product.description)}</p>
                  <strong>${product.price}</strong>
                 </div>
                 {likedProducts.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={() => removeFromLikedProducts(product)} style={{color: 'red'}}/> : <FiHeart onClick={() => addToLike(product)}/>}
               </div>
              </div>  
              </SwiperSlide>
            )
            :
            <p>Loading...</p>
          }
      </Swiper>
       </Container>
    </section>
  )
}

export default Product

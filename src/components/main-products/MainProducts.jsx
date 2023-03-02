import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import "./MainProducts.scss";
import { useTranslation } from 'react-i18next';
import i18n from "../../language/i18next";
import { VscArrowRight } from 'react-icons/vsc'
import instance from '../../api/instance';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/scss/pagination'
import { FiArrowRight } from 'react-icons/fi'
import bigSimulate from '../../img/ads_combo3.png'

const MainProducts = () => {
  console.log(i18n);
  const dispatch = useDispatch();
  console.log(dispatch)
  const {t} = useTranslation();
  const {likedProducts} = useSelector(state => state.likeReducer)
  console.log(likedProducts, );

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])

  useEffect(() => {
    instance.get(`/categories/1/products`)
      .then(response => { 
        setData1(response.data)
      })
      .catch(
        err => { 
        console.log(err)
        })
  }, [])
  useEffect(() => {
    instance.get(`/categories/2/products`)
      .then(response => { 
        setData2(response.data)
      })
      .catch(
        err => { 
        console.log(err)
        })
  }, [])
  useEffect(() => {
    instance.get(`/categories/3/products`)
      .then(response => { 
        setData3(response.data)
      })
      .catch(
        err => { 
        console.log(err)
        })
  }, [])
  
  useEffect(() => {
    instance.get(`/categories/4/products`)
      .then(response => { 
        setData4(response.data)
      })
      .catch(
        err => { 
        console.log(err)
        })
  }, [])

  return (
    <section className='main-products'>
      <Container>
      <div className='first_wrapper'>
      <div className='categories__swiper-wrapper-1__items'>
                  <h2 className='categories__swiper-wrapper-1__items__h2'>Up to 60% off home must-haves</h2>
                  <p className='categories__swiper-wrapper-1__items__p'>Shop mattresses, toppers, and more.</p>
                  <div className="categories__swiper-wrapper-1__items__btn">
                  <Link to='/category/1'>{t("shop_now")}
                  <VscArrowRight/>
                  </Link>
                </div>
            </div>
            <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data1.map(item => 
          <SwiperSlide className='none'>
            <Link to={"/product/"+ item.id}><img className='first_slide_img' src={item.images[0]} alt="" /></Link>
            <p className='first_slide_p'>${item.price}</p>
          </SwiperSlide>  
        )
      }
    </Swiper>
      </div>
      <div className='home-swiper-wrapper second'>
        <div className='text'>
          <h1>{t("home_second_swiper_text")} {data2[0]?.category?.name}</h1>
          <Link to='/category/2'>{t("see_all")}<FiArrowRight/></Link>
        </div>
        <div className='carpusel'>
          <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
          >
            {
              data2.map(item => 
                <SwiperSlide className='none'>
                  <Link to={`/product/${item.id}`} className='category-item' key={item.id}>
                <div className='category__image-wrapper'>
                  <img className='category-image' src={item.images[0]} alt="" />
                </div>
                <h3>{item.title}</h3>
              </Link> 
                </SwiperSlide> 
              )
            }
          </Swiper>
        </div>
      </div>
      <div className='home-swiper-wrapper third'>
        <div className='text'>
          <h1>{t("home_third_swiper_text")} {data3[0]?.category?.name}</h1>
          <Link to='/category/3'>{t("see_all")}<FiArrowRight/></Link>
        </div>
        <div className='carpusel'>
          <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
          >
            {
              data3.map(item => 
                <SwiperSlide className='none'>
                  <Link to={`/product/${item.id}`} className='category-item' key={item.id}>
                <div className='category__image-wrapper'>
                  <img className='category-image' src={item.images[0]} alt="" />
                </div>
                <h3>{item.title}</h3>
              </Link> 
                </SwiperSlide> 
              )
            }
          </Swiper>
        </div>
      </div>
       <div className="ads_combo">
        <img src={bigSimulate} alt="" />
       </div>
       <div className='fourth_swiper'>
        <div className='fourth_swiper-text'>
          <h1>
            {data4[0]?.category?.name} - {t("home_fourth_swiper_text")}
          </h1>
          <Link to='/category/5'>{t("see_all")} <FiArrowRight/></Link>
        </div>
        <Swiper className='fourth_swiper_el'
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
        >
          {
            data4.map(item => 
              <SwiperSlide className='fourth_swiper_el-child'>
                <Link to={"/product/" + item?.id}>
                  <img className='fourth_slide-img' src={item?.images?.at(0)} alt="" />
                  <strong className='fourth_swiper_price'>${item.price}</strong>
                </Link>
              </SwiperSlide>  
            )
          }
        </Swiper>
       </div>
      </Container> 
    </section>
  )
}

export default MainProducts
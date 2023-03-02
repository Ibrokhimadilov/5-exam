import React from 'react';
import './Banner.scss';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img from '../../img/image(1).png'
import {VscArrowRight} from 'react-icons/vsc';

const Banner = () => {
  return (
    <>
    <div className="categories-banner">
            <div className="categories-banner__items">
                <h2 className='categories-banner__h2'>Super savings at the Brand Outlet</h2>
                <p className='categories-banner__text'>Up to 60% off the brands you love.</p>
                <div className="categories-banner__btn">
                  <p>Shop now</p>
                  <VscArrowRight/>
                </div>
            </div>
            <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
        </div>
        <div className='random_image'>
            <img src={img} alt="" />
        </div>
        </>
  )
}

export default Banner

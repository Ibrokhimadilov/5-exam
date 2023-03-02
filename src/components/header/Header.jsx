import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {FiChevronDown, FiBell, FiShoppingCart} from "react-icons/fi";
import Container from '../../utils/Container';
import { useTranslation } from 'react-i18next';
import i18n from "../../language/i18next";
import { useSelector } from 'react-redux';
 
const Header = () => {
  const {t} = useTranslation();
  const location = useLocation();
  const createUserData = useSelector(state => state.createReducer.email);
  const {likedProducts} = useSelector(state => state.likeReducer)

  return location.pathname.includes("/auth") ? <></> : (
    <header>
      <Container>
        <nav>
        <ul className='header_first_list'>
          {/* <li>
          {t('header_hi')} <Link className='special_li_link' to='/auth/login'>{t('header_signin')}</Link> {t('header_or')} <Link className='special_li_link' to='/auth/create'>{t('header_register')}</Link>
          </li> */}
          <li className='header_hi'>
          {t('header_hi')}              
              {
                createUserData ? createUserData 
                : 
                <div className='header_auth'><Link className='special_li_link' to='/auth/login'> {t('header_signin')} </Link><p>{t("header_or")}</p><Link className='special_li_link' to='/auth/create'>{t('header_register')}</Link></div>
              }
          </li>
          <li>
           <a href="#">{t('header_daily')}</a>
          </li>
          <li>
            <a href="#">{t('header_brand')}</a>
          </li>
          <li>
            <a href="#">{t('header_help')}</a>
          </li>
          <li onClick={() => i18n.changeLanguage("uz")}>
            <a href="#">ENG</a>
          </li>
              <span>|</span>
            <li onClick={() => i18n.changeLanguage("ru")}>
              <a href="#">RU</a>
            </li>
        </ul>  
        <ul className='header_second_list'>
          <li>
            <a href="#">{t('header_sell')}</a>
          </li>
          <li>
            <Link to='/like' href="#">{t('header_watchlist')} <FiChevronDown/></Link>
          </li>
          <li>
            <a href="#">{t('header_myEbay')} <FiChevronDown/></a>
          </li>
          <li>
            <a href="#"><FiBell/></a>
          </li>
          <li>
            <Link to='/cart'><FiShoppingCart/></Link>
          </li>
        </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
import './Header2.scss'
import useFetchData from '../../hooks/useFetchData'
import Container from '../../utils/Container'
import { useLocation } from 'react-router-dom'

const Header2 = () => {
    const [data] = useFetchData('/categories')
    const location = useLocation()

    // const toCate = (e) => {
    //     setCateId(e.target.id)
    //     window.location.pathname = `/category/${cateId}`;
    //   } 
  return location.pathname.includes("/auth") || location.pathname.includes("category") ? <></> : (
    <div>
      <Container>
      <ul className='header2-list'>
        <li>
            <Link to='/'>{t('to_home')}</Link>
        </li>
        <li>
            <Link to='/like'><FiHeart/>{t("heart")}</Link>
        </li>
        {
            data.map(cate => 
                <li id={cate.id}>
                  <Link to={`/category/${cate.id}`}>{cate.name}</Link>
                </li>    
            )
        }
      </ul>
      </Container>
    </div>
  )
}

export default Header2
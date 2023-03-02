import React, {useState} from 'react'
import { FiSearch } from "react-icons/fi";
import instance from '../../api/instance';
import Container  from '../../utils/Container';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from "../../language/i18next";
import logo from '../../img/eBay.svg'
import "./Search.scss"; 
import useFetchData from '../../hooks/useFetchData';
const Search = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState("")
  const {t} = useTranslation();
  const giveSearchSuggestions = (e) => {
    setSearchValue(e.target.value)
     instance.get(`products/?title=${e.target.value}&offset=10&limit=10`)
     .then(res => setSearchResult(res.data))
     .catch(err => console.log(err))
  }
  
  const setCategory = (e) => {
    setSearchCategory(e.target.value)
  }

  const giveMoreResults = (e) => {
    e.preventDefault();
    window.location.pathname = `/search/${searchCategory}/${searchValue}`;
  } 

  const [data] = useFetchData("/categories")
  const location = useLocation();
   
  return location.pathname.includes("/auth") ? <></> : (
    <section className='search' >
      <Container>
        <form onSubmit={giveMoreResults}>
          <div className="search-wrapper">
            <img src={logo} alt="" />
            <div className='search-elements'>
              <input onChange={giveSearchSuggestions} className='search__input' type="text" placeholder={t("search_placeholder")}/>
              <select className='search_select' onMouseMove={setCategory} onChange={setCategory} name="" id="">
                <option value="1">{t("search_by")}</option>
                {
                  data.map(category => 
                    <option value={category.id}>{category.name}</option>  
                  )
                }
              </select>
              <button className='search__btn'><FiSearch/> {t("search_form_btn")}</button>
              {searchResult?.length > 0 && searchValue  ?  <div className='search-suggestions'>
              {
                searchResult.map(i => 
                  <Link to={`/product/${i.id}`} className='search-item'>
                    <span>{i.title}</span>
                  </Link>
                )
              }
              </div> : <></>}
            </div>
          </div>
        </form>
      </Container>
    </section>
  )
}

export default Search
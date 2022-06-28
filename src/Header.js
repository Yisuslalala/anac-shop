import React from 'react'
import './Header.css'
import logo_anac from './logo_anac.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
  return (
    <div className='header'>
      <img 
        className='header__logo'
        src={logo_anac} alt="logo_anac"
        />

      <div 
        className='header__search'>
          < input
            className = " header_search In put " 
            type = " text " / >

            <SearchIcon className="header__searchIcon"/>
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLine'>Hola, cliente</span>
          <span className='header__optionLine'>Sign in</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLine'>Retornos</span>
          <span className='header__optionLine'>& Pedidos</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLine'>Cuenta</span>
          <span className='header__optionLine'>Membresía</span>
        </div>

        <div className='header__optionBasket'>
          <ShoppingCartIcon/>
          <span className='header__optionLineTwoheader__basketCount'>0</span>
        </div>

      </div>

    </div>
  )
}
export default Header
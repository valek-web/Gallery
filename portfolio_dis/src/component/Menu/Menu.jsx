import React from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.css'

export const Menu = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <ul className='menu'>
            <li className='menu__element'>
              <NavLink to='/main'>Главное</NavLink>
            </li>
            <li className='menu__element'>
              <NavLink to='/about'>Обо мне</NavLink>
            </li>
            <li className='menu__element'>
              <NavLink to='/skills'>Навыки</NavLink>
            </li>
            <li className='menu__element'>
              <NavLink to='/portfolio'>Портфолио</NavLink>
            </li>
            <li className='menu__element'>
              <NavLink to='/contact'>Контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

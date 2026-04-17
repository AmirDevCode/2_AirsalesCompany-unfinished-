import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='header-sections-left'>
              <div>
                <h2 className='logo-name'><svg 
                  width="30" 
                  height="30" 
                  viewBox="0 0 25 30" 
                  fill="pink"
                  style={{ transform: 'rotate(45deg)', display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                booking.
                </h2>
              </div>
      
              <div className='header-div'>  
                <h2 className='menu-header-h2-line'>Главная</h2>
                <h2 className='menu-header-h2'>Отели</h2>
                <h2 className='menu-header-h2'>Билеты</h2>
                <h2 className='menu-header-h2'>О компании</h2>
              </div>
      
              <div className='header-sections-right'>
                <h2 className='menu-header-h2'>Войти</h2>
              </div>
      
            </header>
    </div>
  )
}

export default Header

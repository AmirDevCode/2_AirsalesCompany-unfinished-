import React from 'react'
import video from '../assets/videoSite.mp4'
import './header-first-section.css'

const categories = ['горы', 'пляжи', 'пустыни', 'кемпинг', 'замки', 'будущее'];

  // SVG иконки для каждой категории (чёрно-белые)
  const svgIcons = {
    горы: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15L8 9L12 13L16 5L20 11V15H4Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
        <path d="M4 15H20V19H4V15Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
      </svg>
    ),
    пляжи: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18H21C21 15 19 13 16 13C14 13 12.5 14 12 15C11.5 14 10 13 8 13C5 13 3 15 3 18Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="2" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
      </svg>
    ),
    пустыни: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L6 12L9 14L12 9L15 13L18 11L21 15V17H3Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
        <circle cx="12" cy="7" r="2" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
      </svg>
    ),
    кемпинг: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 20H20L12 4Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
        <rect x="10" y="14" width="4" height="6" fill="#555" stroke="#ffffff" strokeWidth="1.5"/>
      </svg>
    ),
    замки: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Башни */}
        <rect x="5" y="8" width="4" height="12" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
        <rect x="15" y="8" width="4" height="12" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5"/>
        {/* Зубцы башен */}
        <rect x="5" y="5" width="1.5" height="3" fill="#ffffff"/>
        <rect x="7.5" y="5" width="1.5" height="3" fill="#ffffff"/>
        <rect x="15" y="5" width="1.5" height="3" fill="#ffffff"/>
        <rect x="17.5" y="5" width="1.5" height="3" fill="#ffffff"/>
        {/* Центральная часть */}
        <rect x="8" y="10" width="8" height="10" fill="#ffffff" stroke="#333" strokeWidth="1.5"/>
        {/* Ворота */}
        <path d="M10 20V15C10 13.5 11 13 12 13C13 13 14 13.5 14 15V20" fill="#222" stroke="#333" strokeWidth="1.5"/>
        {/* Окна */}
        <rect x="9" y="11" width="2" height="2" fill="#666"/>
        <rect x="13" y="11" width="2" height="2" fill="#666"/>
        {/* Крыша */}
        <polygon points="8,10 12,6 16,10" fill="#333" stroke="#333" strokeWidth="1.5"/>
        {/* Флаг */}
        <line x1="12" y1="6" x2="12" y2="3" stroke="#333" strokeWidth="1.5"/>
        <polygon points="12,3 15,4.5 12,6" fill="#333"/>
      </svg>
    ),
    будущее: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" fill="#333" stroke="#333" strokeWidth="1.5"/>
        <path d="M12 6V12L15 15" stroke="#FFF" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="#FFF"/>
      </svg>
    )
  };
const FirstSection = () => {
  return (
    <div style={{position:'relative'}}>
      <div className='first-section-div'>
        <video 
          className="background-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="gradient-overlay"></div>
        <div className='pre-content'>
          <div className="content">

            <div className='main-zagolovok'>
              <h1 className='zagolovok-input'>пусть весь мир</h1>
              <h1 className='zagolovok-input'>Подождет!</h1>
            </div>

            <div className='div-main-input'>
              <div>
                <input className='main-input' maxLength={40} placeholder='⌕ Найти билеты, забронировать отель...'></input>
                <button className='submit-poisk'>Поиск</button>
              </div>
            </div>

            <div className='div-categories'>
              <h2 className='h2-categories'>Топ категорий</h2>
              <div className='row-categories'>
                {categories.map((category, index) => (
                  <div className='row-categories-punkt' key={index}>
                    <div className='categories-img'>
                      {svgIcons[category]}
                    </div>
                    <h2 className='category-h2'>{category}</h2>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection

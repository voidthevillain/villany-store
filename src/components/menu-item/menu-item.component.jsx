import React from 'react'
import './menu-item.style.scss'

const MenuItem = props => {
  const { title, imageUrl, size } = props

  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-img'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{`shop now`.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default MenuItem

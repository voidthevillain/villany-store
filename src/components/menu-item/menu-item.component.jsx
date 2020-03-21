import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.style.scss'

const MenuItem = props => {
  const { title, imageUrl, size, linkUrl, history, match } = props

  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem)

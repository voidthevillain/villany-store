import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.style.scss'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  )
}

// the above .filter() and .map() will run on every re-render so it might bring performance implications

export default CollectionPreview

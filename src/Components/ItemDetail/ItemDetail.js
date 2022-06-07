import React from 'react'

const ItemDetail = ({data}) => {
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail_image' 
                 src='#' 
                 alt='imagen'
                 />
                <div className='container'>
                    <h1>{data.title}</h1>
                </div>
        </div>
    </div>
  )
}

export default ItemDetail
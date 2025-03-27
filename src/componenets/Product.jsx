import React from 'react'

const Product = ({thumbnail, title}) => {
  return (
    <div className='flex flex-col w-[200px] flex-wrap p-2 border border-black items-center justify-center'>
        <img src={thumbnail} alt={title} className='w-32'/>
        <div>{title}</div>
    </div>
  )
}

export default Product
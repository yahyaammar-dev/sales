import React from 'react'

const Card = ({message, para, lineBottom, marginLeft, background, color}) => {
  return (
    <div className='w-2/12 card p-5 rounded mb-5' style={{marginLeft: marginLeft, background: background }}>
      <div className={lineBottom ? 'container' : ''}>
        <p className='card__para' style={{color: color}}>{message}</p>
        <h2 className='card__heading' style={{color: color}}>{para}</h2>
        <div className='flex justify-end gap-3'>
          <img src='/imgs/edit.svg' className='icon' />
          <img src='/imgs/microphone.svg' className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Card
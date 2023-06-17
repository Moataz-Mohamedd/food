import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteSection = () => {
  return (
    <div className='section quote'>
      <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi saepe numquam minima, libero doloribus odio dolore accusamus quisquam sit nobis, unde veniam eveniet mollitia ex quidem odit nesciunt! Ratione, expedita?</p>
      <p className="quote-author">- Anthony Bourdian</p>
    </div>
  )
}

export default QuoteSection

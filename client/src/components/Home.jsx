import React from 'react'
import AddWords from './AddWords'
function Home() {
  return (
    <div className='home-container'>
        <div className="words-wrapper">
            <div className="words-main-text">Words</div>
            <div className="words-subtext-wrapper">
                <div className="words-subtext">abcdefg</div>
                <div className="words-subtext">abcdefg</div>
                <div className="words-subtext">abcdefg</div>
                <div className="words-subtext">abcdefg</div>
                <div className="words-subtext">abcdefg</div>
            </div>
        </div>
        <AddWords></AddWords>
    </div>
  )
}

export default Home

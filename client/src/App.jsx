import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

function App() {

    const [words, setWords] = useState(Array(5).fill(''))
    // axios.get('http://localhost:3000/users').then((respond)=>{
      // console.log(respond.data)
    // })

    const updateWords = (e, i) => {
      const newWords = [...words];
      newWords[i] = e;
      setWords(newWords)
      console.log(newWords)
    }

  return (
      <div className="contents-wrapper">





        <div className="header-container"></div>


        <div className="card-container addWords">
          <div className="addWords-header">
            <h2 className="main-text">단어 추가하기</h2>
          </div>

          <div className="addWords-input-container">
            <div className="addWords-padding-wrapper">

              {
                words.map((e,index)=>(

                <div key={index} className="word-input-wrapper">
                  <div className="subtext">Word #{index+1}</div>
                  <input onChange={(e)=>{updateWords(e.target.value, index)}} className="word-input"placeholder="Enter a word" type="text" />
                </div>
                ))
              }

{/* 
              <div className="word-input-wrapper">
                <div className="subtext">Word #2</div>
                <input className="word-input" placeholder="Enter a word" type="text" />
              </div>

              <div className="word-input-wrapper">
                <div className="subtext">Word #3</div>
                <input className="word-input"placeholder="Enter a word" type="text" />
              </div>

              <div className="word-input-wrapper">
                <div className="subtext">Word #4</div>
                <input className="word-input"placeholder="Enter a word" type="text" />
              </div>

              <div className="word-input-wrapper">
                <div className="subtext">Word #5</div>
                <input className="word-input"placeholder="Enter a word" type="text" />
              </div>

              <div className="word-input-wrapper">
                <div className="subtext">Add an extra</div>
                <div className="word-input"></div>
              </div> */}


            </div>

          </div>
          <div className="submit-wrapper">
            <div className="submit-button">Submit</div>
          </div>
        </div>




      </div>
  )
}

export default App

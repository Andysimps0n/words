import { useEffect } from "react"
import axios from "axios"

function App() {

    axios.get('http://localhost:3000/users').then((respond)=>{
      console.log(respond.data)
    })

  return (
      <div className="contents-wrapper">





        <div className="header-container"></div>


        <div className="card-container">
          <div className="addWords-header">
            <h2 className="main-text">단어 추가하기</h2>
          </div>
        </div>


        <div className="card-container">

        </div>




      </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import pic1 from './assets/img/snubnb.png'
function App() {
  const [adultCount, setAdultCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [infantCount, setInfantCount] = useState(0)
  const [petCount, setPetCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src={pic1} alt="Description" />
      </div>
      <h1>SNU-BNB</h1>
      <div className="spot">
        <h2>여행지</h2>
        <span>여행지 검색</span>
      </div>
      <div className="date">
        <h2>날짜</h2>
        <span>날짜 추가</span>
      </div>
      <div className="traveler">
        <h2>여행자</h2>
        <span>게스트 추가</span>
        <div className="typeOfTraveler">
          <div className="adult">
            <span>성인</span>
            <span>13세 이상</span>
            <button onClick={() => adultCount > 0 ? setAdultCount((count) => count - 1) : null}>
            -
            </button>
            <span>{adultCount}</span>
            <button onClick={() => adultCount < 100 ? setAdultCount((count) => count + 1) : null}>
            +
            </button>
          </div>
          <div className="child">
            <span>어린이</span>
            <span>2~12세</span>
            <button onClick={() => childCount > 0 ? setChildCount((count) => count - 1) : null}>
            -
            </button>
            <span>{childCount}</span>
            <button onClick={() => childCount < 100 ? setChildCount((count) => count + 1) : null}>
            +
            </button>
          </div>
          <div className="infant">
            <span>유아</span>
            <span>2세 미만</span>
            <button onClick={() => infantCount > 0 ? setInfantCount((count) => count - 1) : null}>
            -
            </button>
            <span>{infantCount}</span>
            <button onClick={() => infantCount < 100 ? setInfantCount((count) => count + 1) : null}>
            +
            </button>
          </div>
          <div className="pet">
            <span>반려동물</span>
            <span>보조동물을 동반하시나요?</span>
            <button onClick={() => petCount > 0 ? setPetCount((count) => count - 1) : null}>
            -
            </button>
            <span>{petCount}</span>
            <button onClick={() => petCount < 100 ? setPetCount((count) => count + 1) : null}>
            +
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;

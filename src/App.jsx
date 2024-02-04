import { useState } from 'react'
import calculator from './calculator.module.css'
import { InputNumber } from './components/InputNumber'
import { ResultText } from './components/resultText'
import { validatorInput } from './logic/validatorInput.js'

function App() {
  const [resultDate, setResultDate] = useState({
    days: null,
    month: null,
    years: null
  })

  const [messageError, setMessageError] = useState({
    day: null,
    month: null,
    year: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(
      new window.FormData(e.target)
    )

    const date = new Date()

    setMessageError({
      ...messageError,
      day: validatorInput( {
        nameInput: 'day',
        value: data.day
      }),
      month: validatorInput( {
        nameInput: 'month',
        value: data.month
      }),
      year: validatorInput( {
        nameInput: 'year',
        value: data.year
      })
    })

    if (Object.values(resultDate).includes(null || '--')) {
      console.log('hay un erro');
    }
    
    setResultDate(
      {
        days: data.day ? Math.abs((date.getDay() + 1) - data.day) : '--',
        month: data.month ? Math.abs(date.getMonth() - data.month) : '--',
        years: data.year ? Math.abs(date.getFullYear() - data.year) : '--'
      }
    )
  }

  return (
    <main>
      <form className={calculator.container} onSubmit={handleSubmit} noValidate>
        <div className={calculator.container__inputs}>
          <InputNumber
            title='Day'
            min={1}
            max={31}
            placeholder="DD"
            required
            message={messageError}
            setMessage={setMessageError}
          />
          <InputNumber
            title='Month'
            min={1}
            max={12}
            placeholder="MM"
            required
            message={messageError}
            setMessage={setMessageError}
          />
          <InputNumber
            title='Year'
            min={1000}
            max={2021}
            placeholder="YYYY"
            required
            message={messageError}
            setMessage={setMessageError}
          />
          <button className={calculator.button}>
            <span className={calculator.icon__arrow__down}></span>
          </button>
        </div>
        <div className={calculator.container__result}>
          <ResultText number={resultDate.years} text={'years'}/>
          <ResultText number={resultDate.month} text={'months'}/>
          <ResultText number={resultDate.days} text={'days'}/>
        </div>
      </form>
    </main>
  )
}

export default App

import calculator from '../calculator.module.css'

export function ResultText({ number, text }) {
  const currentNumber = number ?? '--' 

  return (
    <p className={calculator.result__text}>
      <span className={calculator.result__number}>{currentNumber}</span>
      {text}
    </p>
  )
}
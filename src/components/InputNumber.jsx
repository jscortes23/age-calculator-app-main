import calculator from '../calculator.module.css'

export function InputNumber({ min, max, placeholder, inputMode, required, title, message }) {

  return (
    <label className={calculator.container__input}>
      <span className={calculator.input__title}
        style={{ color: message[title.toLowerCase()] && 'var(--light-red)'}}
      >{title}</span>
      <input
        type="number" 
        className={calculator.input__number}
        min={min} 
        max={max} 
        placeholder={placeholder} 
        inputMode={inputMode} 
        name={title.toLowerCase()}
        required={required}
        style={{
          borderColor: message[title.toLowerCase()] && 'var(--light-red)' 
        }}
      />
      {message[title.toLowerCase()] && <span className={calculator.error}>{message[title.toLowerCase()]}</span>}
    </label>
  )
}
export const validatorInput = ({nameInput, value}) => {
  const date = new Date()

  switch (nameInput) {
  case 'day':
    if (value > 0 && value < 31) {
      return null
    } else if (value === '') {
      return 'This field is required'
    } else  {
      return 'Must be a valid day'
    }
  
  case 'month':
    if (value > 0 && value <= 12) {
      return null
    } else if (value === '') {
      return 'This field is required'
    }else {
      return 'Must be a valid month'
    }
  
  case 'year':
    if (value > 0 && value <= date.getFullYear()) {
      return null
    } else if (value === '') {
      return 'This field is required'
    }else {
      return 'Must be in the past'
    }
  }
}
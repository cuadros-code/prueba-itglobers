import { useState } from "react"

const useForm = ( initialState = {} ) => {
  
  const [valueForm, setValueForm] = useState(initialState)

  const onChange = ({target}) => {
    setValueForm({
      ...valueForm,
      [target.name]: target.value
    })
  }

  const resetForm = () => {
    setValueForm(initialState)
  }

  return {
    valueForm,
    onChange,
    resetForm,
  }

}

export default useForm

import { useState } from "react"
import validateForm from "../helpers/validateForm"

const useForm = ( initialState = {} ) => {
  
  const [isShowMessage, setIsShowMessage] = useState(false)
  const [valueForm, setValueForm] = useState(initialState)
  const [errors, setErrors] = useState({})

  const onChange = ({target}) => {
    setValueForm({
      ...valueForm,
      [target.name]: target.value
    })
  }

  const resetForm = () => {
    setValueForm(initialState)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    const err = validateForm(valueForm)
    setErrors(err)
    if(Object.keys(err).length > 0) {
      return
    }
    console.log(valueForm)
    showMessage()
    resetForm()
  }

  const showMessage = () => {
    setIsShowMessage(true)
    setTimeout(() => {
      setIsShowMessage(false)
    }, 5000);
  }

  return {
    errors,
    valueForm,
    onChange,
    resetForm,
    onSubmitForm,
    isShowMessage
  }

}

export default useForm

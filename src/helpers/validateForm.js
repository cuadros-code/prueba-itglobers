// {
//   name,
//   email,
//   age,
//   phone
// }

const validateForm = ( valueForm ) => {

  const errors = {}
  const fieldValidator = /[A-Za-z0-9]/
  
  if(valueForm.name.length <= 0){
    errors.name = 'El nombre es requerido'
    if(fieldValidator.test(valueForm.name)){
      errors.name = 'El nombre es requerido'
    }
  }
  if(valueForm.email.length <= 0){
    errors.email = 'El email es requerido'
  }
  if(valueForm.age < 18 || valueForm.age > 100){
    errors.age = 'La edad es invalida'
  }
  if(valueForm.phone.length < 5){
    errors.phone = 'Ingrese un numero de celular valido'
  }

  return errors

}

export default validateForm

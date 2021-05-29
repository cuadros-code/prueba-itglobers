import styled from 'styled-components'
import useForm from '../hooks/useForm'
import SuccessMessage from './SuccessMessage'

const FormComponent = () => {

  const { valueForm, 
          onChange, 
          onSubmitForm, 
          errors,
          isShowMessage } = useForm({ name:'', email:'', phone:'', age:'' })

  const { name, email, phone, age } = valueForm

  return (
    <>
      <ContainerForm>
        <Form onSubmit={onSubmitForm} >
          <ContentField>
            <Label htmlFor="name" >Nombre completo<Required>*</Required></Label>
            <Input 
              name="name"
              onChange={onChange} 
              value={name} 
              placeholder="Nombre completo" 
              id="name" 
              type="text" />
              {
                errors.name
                && <Alert>{errors.name}</Alert>
              }
          </ContentField>
          <ContentField>
            <Label htmlFor="email" >Email<Required>*</Required></Label>
            <Input 
              name="email"
              onChange={onChange} 
              value={email} 
              id="email" 
              placeholder="Email"
              type="email" />
              {
                errors.email
                && <Alert>{errors.email}</Alert>
              }
          </ContentField>
          <ContentField>
            <Label htmlFor="phone" >Celular<Required>*</Required></Label>
            <Input 
              name="phone"
              onChange={onChange} 
              value={phone} 
              id="phone" 
              placeholder="Celular" 
              type="number" />
              {
                errors.phone
                && <Alert>{errors.phone}</Alert>
              }
          </ContentField>
          <ContentField>
            <Label htmlFor="age" >Edad<Required>*</Required></Label>
            <Input 
              name="age"
              onChange={onChange} 
              value={age}  
              id="age" 
              placeholder="Edad" 
              type="number" 
              min="18" 
              max="100"/>
              {
                errors.age
                && <Alert>{errors.age}</Alert>
              }
          </ContentField>
          <Button type="submit" >Enviar datos</Button>
        </Form>
      </ContainerForm>
        {
          isShowMessage
          &&
          <SuccessMessage />
        }
    </>
  )
}

export default FormComponent

const ContainerForm = styled.div`
  max-width: 350px;
  min-width: 350px ;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.16);
  border-radius: 10px;
  padding: 25px;
  @media(max-width: 400px){
    min-width: 320px;
  }
`
const Form = styled.form`
  padding: 10px;
`
const Label = styled.label`
  margin-bottom: 10px;
  padding-left: 10px;
`
const Input = styled.input`
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  border: 2px solid #e1e1e1;
  padding-left: 10px;
  
  :focus {
    box-shadow: 0px 0px 6px #3BC5BA ;
    border: none;
    outline: none;
  }
`
const ContentField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Required = styled.span`
  color: red;
`
const Button = styled.button`
    background-color: #369AB6;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    height: 35px;
    border: none;
    :hover {
      box-shadow: 0px 0px 6px #369AB6;
      cursor: pointer;
    }
`
const Alert = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  background: #F8D7DA;
  color: #842029;
  font-size: 1.1rem;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
`
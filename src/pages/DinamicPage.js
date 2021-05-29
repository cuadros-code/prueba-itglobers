import styled from 'styled-components'
import FormComponent from '../components/Form'

const DinamicPage = ( props ) => {
  return (
    <Container>
      <h1>{props?.title}</h1>
      <h3>Hola, bienvenido, 
        sabemos que quieres viajar con <Span>{props?.title}</Span>, por favor 
        diligencia el siguiente formulario
      </h3>

      <div>
        <FormComponent />
      </div>
    </Container>
  )
}

export default DinamicPage

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  flex-direction: column;
  align-items: center;

  h1{
    /* margin: 0; */
  }

  h3{
    margin: 5px 0 30px 0;
  }
`

const Span = styled.span`
  color: #74857f;
`
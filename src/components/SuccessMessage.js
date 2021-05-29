import styled from 'styled-components'

const SuccessMessage = () => {

  return (
    <>
      <Content>
        <Container>
          <p>Tu información fue enviada con éxito, estaremos en contacto contigo.</p>
        </Container>
      </Content>
    </>
  )
}

export default SuccessMessage

const Content = styled.div`
  animation: fadeOut 5s;
`

const Container = styled.div`
  width: 300px;
  height: 300px ;
  display: flex;
  padding: 15px;
  align-items: center;
  background: #D9EDF7;
  justify-content: center;
  box-shadow: 0px 0px 50px rgba( 0, 0, 0, 0.3);
  border-radius: 15px;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  p{
    font-size: 1.2rem;
    text-align: center;
    color: #2D6987;
  }
  @keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}
  }

  
`
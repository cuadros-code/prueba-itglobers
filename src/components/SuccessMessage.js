import { useEffect, useState } from 'react'
import styled from 'styled-components'

const SuccessMessage = () => {

  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    const close = setTimeout(() => {
      setIsShow(false)
    }, 5000);

    return () => {
      clearTimeout(close)
    }
  }, [])

  return (
    <>
      {
        isShow 
        &&
        <Container>
          <p>Tu información fue enviada con éxito, estaremos en contacto contigo</p>
        </Container>
      }
    </>
  )
}

export default SuccessMessage

const Container = styled.div`
  width: 300px;
  height: 300px ;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 100% rgba(0,0,0,0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
`
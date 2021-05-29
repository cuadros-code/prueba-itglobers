import { useState } from 'react'
import styled from 'styled-components'
import { paths } from '../navigation/paths'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [buttonMenu, setButtonMenu] = useState(false)

  return (
    <>
      <ContentButton>
        <ButtonMenu onClick={() => setButtonMenu(!buttonMenu)}>
          <i className={ buttonMenu ? 'fas fa-times fa-2x': 'fas fa-bars fa-2x' } ></i>
        </ButtonMenu>
      </ContentButton>
      <Nav menu={buttonMenu}>
        <Ul>
            {
              paths.map((path) => (
                  <Link 
                    to={path.route} 
                    key={path.id}
                  >
                    <Li onClick={() => setButtonMenu(false)}  >
                      {path.title}
                    </Li>
                  </Link>
                ))
              }
        </Ul>
      </Nav>
    </>
  )
}

export default NavBar

const Nav = styled.nav`
  height: 55px;
  background: #369AB6;

  @media (max-width: 920px){
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #369AB6;
    width: 100%;
    height: 100%;
    border-right: #ccc 1px solid;
    padding-top: 70px;
    transform: ${props => props.menu ? 'translateX(0px)' : 'translateX(-1000px)'};
    transition: transform 0.6s ease-in-out;
  }

`
const Ul = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  align-items: center;
  
  @media (max-width: 920px){
    flex-direction: column;
    justify-content: flex-start;
  }
`
const Li = styled.li`
  font-size: 1.1rem;
  cursor: pointer;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;

  :hover{
    background: #2e839b;
  }
  @media(max-width: 920px){
    margin-bottom: 50px;
  }

`
const ButtonMenu = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 30px;
  color: #fff;
  z-index: 2;
  display: none;
  @media (max-width: 920px){
    display: block;
  }
`

const ContentButton = styled.div`
  @media(max-width: 920px){
    height: 55px;
    background: #369AB6;
  }
`
import React, {useState} from 'react';
import styled from "styled-components";
import logo from "../images/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';

function Header(props) {
    const [burgerState, setBurgerState] = useState(false);
    return (
        <Container>
            <a><img src={logo}/></a>
            <Menu>
                <a href={"#"}>Model S</a>
                <a href={"#"}>Model 3</a>
                <a href={"#"}>Model X</a>
                <a href={"#"}>Model Y</a>
            </Menu>
            <RightMenu>
                <a href={"#"}>Shop</a>
                <a href={"#"}>Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerState(true)}/>
            </RightMenu>
            <BurgerNav show={burgerState}>
               <CloseWrapper>
                   <CustomClose onClick={()=>setBurgerState(false)}/>
               </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>

    );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  @media(max-width: 768px){
    display: none;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
    flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const CustomClose = styled(Close)`
    cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s;
  transform: ${props => props.show ? 'translateX(0)' : `translateX(100%)`};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
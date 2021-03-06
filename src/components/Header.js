import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {

    const [BurgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>

      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={ () => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
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
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  /* p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 50px;
    flex-wrap: nowrap;
  } */

  a {
    padding: 20px;
    text-decoration: none;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    margin-right: 10px;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  overflow: scroll;
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      text-decoration: none;
      color: black;
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;


const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
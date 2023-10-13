import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/button/Button";
import styled from "styled-components";

const menuItems = ["Home", "About Us", "Prices", "Rules"]

export const Header =() => {
   return (
      <StyledHeader>
         <Logo/>
         <Menu menuItems={menuItems}/>
         <Button/>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: #b19292;
   display: flex;
   justify-content: space-around;
`
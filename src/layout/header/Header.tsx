import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "../../components/menu/mobileMenu/MobileMenu";

const menuItems = ["Home", "About Us", "Prices", "Rules"]

export const Header =() => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper justify="space-between" align="flex-end">
               <Logo width="286px"/>
               <Menu menuItems={menuItems}/>
               <MobileMenu menuItems={menuItems}/>
            </FlexWrapper>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   background-color: transparent;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1;
`

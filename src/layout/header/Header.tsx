import React from "react";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "../../components/menu/desktopMenu/DesktopMenu";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "../../components/menu/mobileMenu/MobileMenu";


export const Header: React.FC =() => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper justify="space-between" align="flex-end">
               <Logo width="286px"/>
               <DesktopMenu/>
               <MobileMenu/>
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

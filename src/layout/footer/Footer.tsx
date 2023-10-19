import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

export const Footer =() => {
   return (
      <StyledFooter>
         <Container>
            <FlexWrapper justify="space-between" align="center">
               <Logo width="239px"/>
               <Copyright>Copyright © 2022 HEALAS.LT. All Rights Reserved.</Copyright>

               <Unordered>
                  <li>
                     <a href="#">
                        <Icon iconId={"facebook"} width={"12"} height={"20"} viewBox={"0 0 12 20"}/>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <Icon iconId={"twitter"} width={"20"} height={"18"} viewBox={"0 0 20 18"}/>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <Icon iconId={"instagram"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                     </a>
                  </li>
               </Unordered>
            </FlexWrapper>
         </Container>
         
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   border-top: 1.5px solid #816F8C;
   background-color: ${theme.colors.bacgroundColor};
   padding: 25px 0 20px;
   ul {
      display: flex;
      gap:30px;
   }
`

const Copyright = styled.span`
   color: ${theme.colors.textColor};
   font-family: "Josefin Sans";
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   line-height: 28px; /* 175% */
`
const Unordered = styled.ul`
   li {
      background-color: #FCD8CB;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`
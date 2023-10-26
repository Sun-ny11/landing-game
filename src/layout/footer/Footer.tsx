import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";

export const Footer: React.FC =() => {
   return (
      <StyledFooter>
         <Container>
            <StyledFlexWrapper justify="space-between" align="center" >
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
            </StyledFlexWrapper>
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
const StyledFlexWrapper = styled(FlexWrapper)`
      @media ${theme.media.large} {
         flex-direction: column;
         gap: 20px;
         padding: 20px;
      }
`
const Copyright = styled.span`
   ${font({weight:500, lineHeight: "28px", Fmax:16, Fmin:12})};
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
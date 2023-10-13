import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";

export const Footer =() => {
   return (
      <StyledFooter>
         <FlexWrapper justify="space-around">
         <Logo/>
         <span>Copyright © 2022 HEALAS.LT. All Rights Reserved.</span>

         <ul>
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
         </ul>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   ul {
      display: flex;
      gap:30px;
   }
`
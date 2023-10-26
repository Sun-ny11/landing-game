import React from "react";
import styled from "styled-components";
import { Button } from "../../button/Button";
import { FlexWrapper } from "../../FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Menu } from "../Menu";

export const DesktopMenu: React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
   return (
      <StyledDesktopMenu>
         <FlexWrapper>
            <Menu menuItems={props.menuItems}/>
            <Button width={180}/>
         </FlexWrapper>
      </StyledDesktopMenu>
   );
};

const StyledDesktopMenu = styled.nav`   
   ul{
      display: flex;
      align-items: center;
      gap: 44px;
      margin-right:55px;
      
      
   }
   @media ${theme.media.large} {
         display: none;
      }

`

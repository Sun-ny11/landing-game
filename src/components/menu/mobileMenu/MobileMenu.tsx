import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../button/Button";
import { FlexWrapper } from "../../FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Menu } from "../Menu";





export const MobileMenu: React.FC =() => {
   const [isMenuOpen, setIsOpen] = useState(false)
   const onClicBtnBurger = () => {setIsOpen(!isMenuOpen)}
   return (
      <StyledMobileMeny>
         
         <BurgerBtn isOpen={isMenuOpen} onClick={onClicBtnBurger}>
            <span></span>
         </BurgerBtn>
         
            <MobileMenuPopup isOpen={isMenuOpen} >
               <FlexWrapper direction="column" align="center" justify="center">
                  <Menu />
                  <Button width={150}/>
               </FlexWrapper>
            </MobileMenuPopup>            
         
      </StyledMobileMeny>
   );
};



const StyledMobileMeny = styled.nav`   
   display: none;
   align-self:center; 

   @media ${theme.media.large} {
      display: block;
      }

`

const BurgerBtn = styled.button<{isOpen: boolean}>`
   width: 40px;
   height: 20px;
   position: relative;
   cursor: pointer;
   z-index: 99999;

   ${props => props.isOpen && css<{isOpen: boolean}>`
      position: fixed;
      right: 20px;
   `};

   span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.textColor};

      ${props => props.isOpen && css<{isOpen: boolean}>`
         background-color: rgba(255,255,255,0);
      `};


      &::after{
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         display: block;
         width: 100%;
         height: 2px;
         background-color: ${theme.colors.textColor};

         ${props => props.isOpen && css<{isOpen: boolean}>`
         transform: rotate(45deg);
         top: 10px;
         `};
      }

      &::before{
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         display: block;
         width: 100%;
         height: 2px;
         background-color: ${theme.colors.textColor};

         ${props => props.isOpen && css<{isOpen: boolean}>`
         transform: rotate(-45deg);
         bottom: 8px;
         `};

      }
}
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 50%;
   background-color: #fff;
   z-index: 9999;
   display: none;
   display: flex;
   justify-content: center;
   align-items: center;
   transform: translateX(101%);
   transition: 1s ease-in-out;
   border-radius: 30%;

   ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: translateX(0);
      border-radius: 0;
   `};

   ul{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 34px;
      margin-bottom:60px;
   };

   @media ${theme.media.mobile} {
      a {
         padding: 10px 0;
      }
   }
   
`;

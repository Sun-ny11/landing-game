import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../button/Button";
import { FlexWrapper } from "../../FlexWrapper";
import { theme } from "../../../styles/Theme";

export const MobileMenu =(props:{menuItems:Array<string>}) => {
   return (
      <StyledMeny>
         <BurgerBtn isOpen={false}>
            <span></span>
         </BurgerBtn>

         
            <MobileMenuPopup isOpen={false} >
               <FlexWrapper direction="column" align="center" justify="center">
               <ul>
                  {props.menuItems.map((item, index) =>{
                     return   <ListItem key={index}>
                                 <Link href="">{item}</Link>
                              </ListItem>
                  })}
               </ul>
               <Button width={180}/>
               </FlexWrapper>
            </MobileMenuPopup>            
         
      </StyledMeny>
   );
};

const StyledMeny = styled.nav`   
   display: none;
   align-self:center;
   @media ${theme.media.large} {
      display: block;
      }

`
const ListItem = styled.li`
   
`

const BurgerBtn = styled.button<{isOpen: boolean}>`
   width: 40px;
   height: 20px;
   position: relative;
   cursor: pointer;
   z-index: 99999;


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
   ${props => props.isOpen && css<{isOpen: boolean}>`
      display: flex;
      justify-content: center;
      align-items: center;
   `};

   ul{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 34px;
      margin-bottom:60px;
   };
`

const Link = styled.a`
   color: #446381;
   font-family: "Josefin Sans", sans-serif;
   font-size: 18px;
   font-weight: 500;
   line-height: 24px;
   position: relative;

   &:before{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0%;
      height: 3px;
      background-color: ${theme.colors.preTitleColor};
      border-radius: 5px;
      transition: .4s;
      opacity: 0.5;
   }

   &:hover:before {
      width:100%;
      left: 0;
   }
`

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll } from 'react-scroll';

export const GoTopBtn: React.FC =() => {

   const [showBtn, setShowBtn] = useState(false)

   useEffect(() => {
      window.addEventListener("scroll", () => {
         window.scrollY > 200? setShowBtn(true): setShowBtn(false)
      })
   }, [])

   return (
      <>
         {showBtn && (
            <StyledGoTopBtn onClick={()=>{animateScroll.scrollToTop()}}>
               <Icon iconId={"goTop"} width={"40"} height={"40"} viewBox={"0 0 35 35"}/>
            </StyledGoTopBtn>
         )}
         
      </>
      
   );
};
//Как сделать так, чтобы кнопка отталкивалась от footer?
//Сейчас это костыль из absolute>z-index:1 в footer

const StyledGoTopBtn = styled.button`
   position: fixed;
   bottom: 30px;
   right: 30px;

   cursor: pointer;
`
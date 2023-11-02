import React from "react";
import logo from "./../../assets/img/Logo.png"
import logoWebp from "./../../assets/img/Logo.webp"
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { animateScroll } from "react-scroll";

type LogoPropsType ={
   width: string
}

export const Logo: React.FC<LogoPropsType> =(props:LogoPropsType) => {
   return (   
      <StyledLogo onClick={() => {animateScroll.scrollToTop()}} width={props.width}>
         <picture>
            <source srcSet={logoWebp} type="image/webp"/>
            <source srcSet={logo} type="image/jpeg"/>
            <img src={logo} alt="Logo" />
         </picture>
      </StyledLogo>
   );
};

const StyledLogo = styled.a<LogoPropsType>`
   img {
      display: inline-block;
      width: ${props => props.width};
      /* object-fit: cover; */

      @media ${theme.media.mobile}{
         width: 239px;
      }
   }
   
   

`
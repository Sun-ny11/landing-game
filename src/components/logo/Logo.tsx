import React from "react";
import logo from "./../../assets/img/Logo.png"
import styled from "styled-components";

type LogoPropsType ={
   width: string
}

export const Logo =(props:LogoPropsType) => {
   return (   
      <StyledLogo width={props.width}>
         <img src={logo} alt="Logo" />
      </StyledLogo>
   );
};

const StyledLogo = styled.a<LogoPropsType>`
   img {
      display: inline-block;
      width: ${props => props.width};
      /* object-fit: cover; */
   }
   

`
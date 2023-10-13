import React from "react";
import logo from "./../../assets/img/Logo.png"
import styled from "styled-components";

export const Logo =() => {
   return (   
      <StyledLogo>
         <img src={logo} alt="Logo" />
      </StyledLogo>
   );
};

const StyledLogo = styled.a`
   img {
      display: inline-block;
      width: 286px;
      /* object-fit: cover; */
   }
   

`
import React from "react";
import { Button } from "../button/Button";
import { PreTitleAndTitle } from "./PreTitleAndTitle"
import styled from "styled-components";
import { theme } from "../../styles/Theme";


type AboutSectionPropsType = {
   preTitle: string
   title: string
   text: string
   special?: string
   specialPrice?: string
}


export const AboutSection =(props:AboutSectionPropsType) => {
   return (
      <div>
         <PreTitleAndTitle preTitle={props.preTitle} title={props.title} special={props.special} specialPrice={props.specialPrice} />
         <StyledText>{props.text}</StyledText>
         <Button width={210}/>
      </div>
   );
};

const StyledText = styled.p`
   color: ${theme.colors.textColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 18px;
   font-weight: 500;
   line-height: 29px; /* 161.111% */

   margin: 25px 0 30px;
`
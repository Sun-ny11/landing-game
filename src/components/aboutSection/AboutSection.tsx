import React from "react";
import { Button } from "../button/Button";
import { PreTitleAndTitle } from "./PreTitleAndTitle"
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";


type AboutSectionPropsType = {
   preTitle: string
   title: string
   text: string
   special?: string
   specialPrice?: string
}


export const AboutSection =(props:AboutSectionPropsType) => {
   return (
      <StyledSectionText>
         <PreTitleAndTitle preTitle={props.preTitle} title={props.title} special={props.special} specialPrice={props.specialPrice} />
         <StyledText>{props.text}</StyledText>
         <Button width={210}/>
      </StyledSectionText>
   );
};


const StyledSectionText = styled.div`
   max-width: 518px;
`
const StyledText = styled.p`
   ${font({weight: 500,Fmax: 18, Fmin: 15, lineHeight: "29px"})};
   margin: 25px 0 30px;
   
   @media ${theme.media.tablet} {
      margin-top: 20px ;
   }
`
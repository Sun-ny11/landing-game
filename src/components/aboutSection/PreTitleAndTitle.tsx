import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";


type PreTitleAndTitlePropsType = {
   preTitle?: string
   title?: string
   special?: string
   specialPrice?: string
   align?: string
}


export const PreTitleAndTitle =(props:PreTitleAndTitlePropsType) => {
   return (
      <div>
         <StyledPreTitle align={props.align}> {props.preTitle}</StyledPreTitle>
         <StyledTitle>{props.title} 
                     <SpecialColor>
                        {props.special}
                        <SpecialFont>
                           {props.specialPrice}
                        </SpecialFont>
                     </SpecialColor> 
         </StyledTitle>
      </div>
   );
};

const StyledTitle = styled.h2`
   color: ${theme.colors.titleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 68px;
   font-weight: 700;
   line-height: 75px; /* 110.294% */
`

const StyledPreTitle = styled.span<PreTitleAndTitlePropsType>`
   color: ${theme.colors.preTitleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 23px;
   font-weight: 500;
   line-height: 24px; /* 104.348% */
   display: block;
   text-align: ${props => props.align || "start"};
   margin-bottom: 30px;
`

const SpecialColor = styled.span`
   color: ${theme.colors.preTitleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 58px;
   font-weight: 700;
   line-height: 75px;
`
const SpecialFont = styled.span`
   font-family: "Qanelas Soft", sans-serif;
`
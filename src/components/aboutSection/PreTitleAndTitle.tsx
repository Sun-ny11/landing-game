import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";


type PreTitleAndTitlePropsType = {
   preTitle?: string
   title?: string
   special?: string
   specialPrice?: string
   align?: string
}


export const PreTitleAndTitle: React.FC<PreTitleAndTitlePropsType> =(props:PreTitleAndTitlePropsType) => {
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


const StyledPreTitle = styled.span<PreTitleAndTitlePropsType>`
   ${font({color:theme.colors.preTitleColor, weight: 500, lineHeight:"24px", Fmax:23, Fmin:15})};
   display: block;
   text-align: ${props => props.align || "start"};
   margin-bottom: 30px;
`
const StyledTitle = styled.h2`
   ${font({color:theme.colors.titleColor, weight: 700, lineHeight:"75px", Fmax:68, Fmin:38})};
   @media ${theme.media.tablet} {
      line-height: 43px;
   }
`

const SpecialColor = styled.span`
${font({color:theme.colors.preTitleColor, weight: 700, lineHeight:"75px", Fmax:58, Fmin:38})};
white-space: nowrap;
`
const SpecialFont = styled.span`
   font-family: "Qanelas Soft", sans-serif;
`
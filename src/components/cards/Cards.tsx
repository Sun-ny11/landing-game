import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { LgMiniVr } from "../lgIcon/LgMiniVr";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";
import { font } from "../../styles/Common";



type CardsPropsType ={
   nameIcon: () => JSX.Element
}

export const Cards =(props:CardsPropsType) => {
   return (
      <StyledCards>
         <FlexWrapper align="center">
            <div>
               <StyledTitleCard>Sony Dualshock 4 Wireless Controller </StyledTitleCard>
               <StyledPriceCard>$50 Per Hour</StyledPriceCard>
               <div>
                  <Icon iconId={"stars"} width={"48"} height={"8"} viewBox={"0 0 48 8"}/>
                  <StyledReview>125+Review</StyledReview>
               </div>
            </div>

            <div>
               {props.nameIcon()}
            </div>
         </FlexWrapper>
      </StyledCards>
   );
      
      
};

const StyledCards = styled.div`
   max-width: 212px;
   min-height: 95px;

   border-radius: 10px;
   background-color: rgba(255, 255, 255, 0.4);

   padding: 15px;

   filter: drop-shadow(0px 10px 20px rgba(235, 131, 130, 0.40));

   @media ${theme.media.mobile} {
      max-width: 202px;
      height: 79px;
   }
`

const StyledTitleCard = styled.h3`
   ${font({weight:500,color: theme.colors.preTitleColor, Fmax:10,Fmin:7, lineHeight:"12px"})}
`
const StyledPriceCard = styled.span`
   ${font({weight:700, Fmax:10,Fmin:7, lineHeight:"10px"})}
`
const StyledReview = styled.span`
   ${font({weight:500,color: theme.colors.preTitleColor, Fmax:8,Fmin:6, lineHeight:"12px"})}
   margin-left: 6px;
`
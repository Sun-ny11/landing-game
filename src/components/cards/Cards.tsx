import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { LgMiniVr } from "../lgIcon/LgMiniVr";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";



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
   height: 95px;

   border-radius: 10px;
   background-color: rgba(255, 255, 255, 0.4);

   padding: 15px;

   filter: drop-shadow(0px 10px 20px rgba(235, 131, 130, 0.40));
`

const StyledTitleCard = styled.h3`
   color: ${theme.colors.preTitleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 10px;
   font-weight: 500;
   line-height: 12px; /* 120% */
`
const StyledPriceCard = styled.span`
   color: ${theme.colors.textColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 10px;
   font-weight: 700;
   line-height: 10px; /* 100% */
`
const StyledReview = styled.span`
   color: ${theme.colors.preTitleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 8px;
   font-weight: 500;
   line-height: 12px; /* 150% */
   margin-left: 6px;
`
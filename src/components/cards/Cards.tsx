import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { LgMiniVr } from "../lgIcon/LgMiniVr";



type CardsPropsType ={
   nameIcon: () => JSX.Element
}

export const Cards =(props:CardsPropsType) => {
   return (
      <StyledCards>
         <div>
            <h3>Sony Dualshock 4 Wireless Controller </h3>
            <span>$50 Per Hour</span>
            <div>
               <Icon iconId={"stars"} width={"48"} height={"8"} viewBox={"0 0 48 8"}/>
               <span>125+Review</span>
            </div>
         </div>

         <div>
            {props.nameIcon()}
         </div>
      </StyledCards>
   );
      
      
};

const StyledCards = styled.div`
   
`
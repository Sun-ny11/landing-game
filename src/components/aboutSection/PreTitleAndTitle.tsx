import React from "react";
import styled from "styled-components";


type PreTitleAndTitlePropsType = {
   preTitle: string
   title: string
}


export const PreTitleAndTitle =(props:PreTitleAndTitlePropsType) => {
   return (
      <div>
         <StyledPreTitle>{props.preTitle}</StyledPreTitle>
         <StyledTitle>{props.title}</StyledTitle>
      </div>
   );
};

const StyledTitle = styled.h2`
   font-family: "Qanelas Soft", sans-serif;
   font-weight: bold;

`

const StyledPreTitle = styled.span`

`
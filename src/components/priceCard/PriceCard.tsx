import React from "react";
import { Button } from "../button/Button";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import checkMark from "./../../assets/img/checkMark.svg"
import { font } from "../../styles/Common";


type PriceCardPropsType ={
   plan: string
   price: string
}

const items = ["10 users included", "2 GB of storage", "Email support", "Help center access", "10 users included"];

export const PriceCard: React.FC<PriceCardPropsType> =(props:PriceCardPropsType) => {
   return (
      <StyledCard>
            <StyledTitle>{props.plan}</StyledTitle>
            <StyledPrice>{props.price}<span> / Per Hour</span></StyledPrice>
            
            <Unordered>
               {items.map((item, index) => {
                  return <ListItem key="index">
                     {item}
                  </ListItem>
               })}
            </Unordered>
            <Button width={268} name={"Select This Plan"}/>
      </StyledCard>
   );
};

const StyledCard = styled.div`
   max-width: 500px;
   padding: 46px;
   background-color: ${theme.colors.cardColor};
   border-radius: 20px;


   @media ${theme.media.mobile}{
      padding: 34px;
   }
   @media ${theme.media.large}{
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
   }
`

const StyledPrice = styled.span`
   ${font({color:theme.colors.titleColor, weight:700, Fmax: 50, Fmin: 40})}
   &>span{
      font-size: 18px;
      line-height: 0px; /* 0% */
      white-space: nowrap;
   }
`

const StyledTitle = styled.h3`
   ${font({color:theme.colors.preTitleColor, weight:700, Fmax: 32, Fmin: 25})}
   margin-bottom: 34px;

   @media ${theme.media.mobile} {
      margin-bottom: 24px;
   }
`
const ListItem = styled.li`
${font({lineHeight: "25px", weight:500, Fmax: 18, Fmin: 14})}
   &+li {
      margin-top: 25px ;
   }

   padding-left:27px;
   background-image: url(${checkMark});
   background-repeat: no-repeat;
   background-position: left center ;

`

const Unordered = styled.ul`
   margin: 46px 0;
   text-align: start;
`
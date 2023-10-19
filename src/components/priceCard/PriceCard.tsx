import React from "react";
import { Button } from "../button/Button";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import checkMark from "./../../assets/img/checkMark.svg"


type PriceCardPropsType ={
   plan: string
   price: string
}

const items = ["10 users included", "2 GB of storage", "Email support", "Help center access", "10 users included"];

export const PriceCard =(props:PriceCardPropsType) => {
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
   padding: 46px;
   background-color: ${theme.colors.cardColor};
   border-radius: 20px;
   &+& {
      margin-left: 30px;
   }
`

const StyledPrice = styled.span`
   color: ${theme.colors.titleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 50px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   &>span{
      font-size: 18px;
      line-height: 0px; /* 0% */
   }
`

const StyledTitle = styled.h3`
   color: ${theme.colors.preTitleColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 32px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;

   margin-bottom: 34px;
      
`
const ListItem = styled.li`
   color: ${theme.colors.textColor};
   font-family: "Josefin Sans", sans-serif;
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: 25px; /* 138.889% */
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
`
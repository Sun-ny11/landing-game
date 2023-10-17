import React from "react";
import styled from "styled-components";
import { Button } from "../button/Button";
import { FlexWrapper } from "../FlexWrapper";

export const Menu =(props:{menuItems:Array<string>}) => {
   return (
      <StyledMeny>
         <FlexWrapper>
            <ul>
               {props.menuItems.map((item, index) =>{
                  return   <ListItem key={index}>
                              <Link href="">{item}</Link>
                           </ListItem>
               })}
            </ul>
            <Button width={180}/>
         </FlexWrapper>
      </StyledMeny>
   );
};

const StyledMeny = styled.nav`   
   ul{
      display: flex;
      align-items: center;
      gap: 44px;
      margin-right:55px;

   }
`
const ListItem = styled.li`
   
`

const Link = styled.a`
   color: #446381;
   font-family: "Josefin Sans", sans-serif;
   font-size: 18px;
   font-weight: 500;
   line-height: 24px;
   position: relative;

   &:before{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0%;
      height: 3px;
      background-color: #020406;
      border-radius: 5px;
      transition: .2s
   }

   &:hover:before {
      width:100%;
      left: 0;
   }
`
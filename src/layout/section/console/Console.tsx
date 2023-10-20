import React from "react";
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { LgGameIsland } from "../../../components/lgIcon/LgGameIsland";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import imgBg from "./../../../assets/img/bgSecXbox.webp"
import tripleArrow from "../../../assets/img/tripleArrow.svg";

export const Console =() => {
   return (
      <StyledSection>
         <Container>
            <FlexWrapper align="center" direction="row-reverse" gap="90px">
               <StyledImg>
               <LgGameIsland/>
               </StyledImg>
               <StyledSectionWrapper>
                                 <AboutSection preTitle={"About XBOX, PS"} 
                              title={"The New Xbox, Ps Series"} 
                              text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."}/>
               </StyledSectionWrapper>
            </FlexWrapper>
         </Container>
         
      </StyledSection>
   );
};


const StyledSection = styled.section`
   padding: 30px 0 90px;
   background-color:  #ffe6d7f8;
   position: relative;

   &::before {
      content: "";
      background-image: url(${imgBg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
   }
`
const StyledImg = styled.div`

   
`
const StyledSectionWrapper = styled.div`
   position: relative;
   &::before{
      content: url(${tripleArrow});
      position: absolute;
      bottom: 15%;
      right: 20%;
      /* background-image:url(${tripleArrow});
      background-repeat: no-repeat;
      background-position: left; */
      transform: rotate(-180deg);
   }
`
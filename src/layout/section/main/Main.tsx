import React from "react";
import styled from "styled-components";
import { Cards } from "../../../components/cards/Cards";
import { FlexWrapper } from "./../../../components/FlexWrapper"
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { LgMiniVr } from "../../../components/lgIcon/LgMiniVr"
import { LgMiniGameBoy } from "../../../components/lgIcon/LgMiniGameBoy";
import { LgMainRing } from "../../../components/lgIcon/LgMainRing";
import { Container } from "../../../components/Container";
import BgImg from "./../../../assets/img/bgMain.webp"
import cross from "../../../assets/img/cross.svg";
import tripleArrow from "../../../assets/img/tripleArrow.svg";

export const Main =() => {
   return (
      <StyledSection>
         <Container>
            <FlexWrapper align="center" direction={"row-reverse"} >
               <StyledMainImg>
                  <LgMainRing/>

                  <UpperCard>
                     <Cards nameIcon={LgMiniVr}/>
                  </UpperCard>

                  <LowerCard>
                     <Cards nameIcon={LgMiniGameBoy}/>
                  </LowerCard>

               </StyledMainImg>
               <StyledSectionWrapper>
                  <AboutSection preTitle={"Gaming Consoles"} 
                                 title={"Try It, Rent It, "}
                                 special={"Save "}
                                 specialPrice={"$50!"}
                                 text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."} />
               </StyledSectionWrapper>
            </FlexWrapper>
         </Container>
      </StyledSection>
   );
};

const StyledSection = styled.section`
background-color: #ffe6d7f8;
   min-height: 100vh;
   display: flex;
   position: relative;

   &::after {
      content: "";
      background-image: url(${BgImg}); 
      background-repeat: no-repeat;
      background-size:cover;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      z-index: -1;
   }
`
const StyledMainImg = styled.div`
   position: relative;
`
const UpperCard = styled.div`
   position: absolute;
   top: -14px;
   left: -50px;
`
const LowerCard = styled.div`
   position: absolute;
   bottom: -18px;
   right: -126px;
`
const StyledSectionWrapper = styled.div`
position: relative;
   &::before{
      content: url(${cross});
      /* tripleArrow */
      position: absolute;
      bottom: -110px;
      left: 250px;
   }
   &::after{
      content: url(${tripleArrow});
      position: absolute;
      top: 0;
      left: 40%;
   }
`
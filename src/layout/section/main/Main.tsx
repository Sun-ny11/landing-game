import React from "react";
import styled from "styled-components";
import { Cards } from "../../../components/cards/Cards";
import { FlexWrapper } from "./../../../components/FlexWrapper"
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { LgMiniVr } from "../../../components/lgIcon/LgMiniVr"
import { LgMiniGameBoy } from "../../../components/lgIcon/LgMiniGameBoy";
import { LgMainRing } from "../../../components/lgIcon/LgMainRing";
import { Container } from "../../../components/Container";
import BgImgWebp from "./../../../assets/img/bgMain.webp"
import cross from "../../../assets/img/cross.svg";
import tripleArrow from "../../../assets/img/tripleArrow.svg";
import { theme } from "../../../styles/Theme";

export const Main: React.FC =() => {
   return (
      <StyledSection>
         <Container>
            <StyledFlexWrapper justify="center" align="center" direction={"row-reverse"} >
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
            </StyledFlexWrapper>
         </Container>
      </StyledSection>
   );
};


const StyledSection = styled.section`

background-color: #ffe6d7f8;
   min-height: 100vh;
   display: flex;
   position: relative;
   padding-top: 78px;
   
   &::after {
      content: "";
      background-image: url(${BgImgWebp}); 
      background-repeat: no-repeat;
      background-size:cover;
      background-position: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      z-index: -1;
   }

   @media ${theme.media.tablet}{
      padding-top: 90px;
   }
`
const StyledFlexWrapper = styled(FlexWrapper)`
   @media ${theme.media.tablet} {
      flex-wrap: wrap;
   }
`
const StyledMainImg = styled.div`
   position: relative;
   z-index: 1;
   @media ${theme.media.mobile} {
   
   }
   
`
const UpperCard = styled.div`
   position: absolute;
   top: 0px;
   left: -3px;
   max-width: 100%;
   @media ${theme.media.large} {
      top: 0;
      left: 0;
   }

   @media ${theme.media.mobile} {
      top:auto;
      bottom: 13vh;
      
   }
   
`
const LowerCard = styled.div`
   position: absolute;
   bottom: -32px;
   right: 0;
   max-width: 100%;
   @media ${theme.media.tablet} {
      bottom: 0;
      right: 0;
   }
`
const StyledSectionWrapper = styled.div`
   max-width: 528px;

   position: relative;
   &::before{
      content: url(${cross});
      position: absolute;
      bottom: -110px;
      left: 250px;
      animation: spin 5s linear 0s infinite;
   }
   @keyframes spin {
   from {transform:rotate(0deg);}
   to {transform:rotate(360deg);}
}
   &::after{
      content: url(${tripleArrow});
      position: absolute;
      top: 0;
      right: 17vw;
      @media ${theme.media.tablet} {
         right: 30vw
      }
   }

   @media ${theme.media.tablet} {
      margin: 50px 0;
      &::before{
         display: none;
      }
   }
`
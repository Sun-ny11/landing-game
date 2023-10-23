import React from "react";
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { Icon } from "../../../components/icon/Icon";
import {LgGlasses} from "../../../components/lgIcon/LgGlasses"
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";

export const Glasses =() => {
   return (
         <StyledSection>
            <Container>
               <FlexWrapper align="center">
                  <StyledImg>
                     <LgGlasses/>
                  </StyledImg>
                  <AboutWrapper>
                           <AboutSection preTitle={"About VR Glasses"} 
                              title={"The New VR Glasses Series"}
                              text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."}/>
                  </AboutWrapper>

               </FlexWrapper>
            </Container>      
            
         </StyledSection>
      
   );
};


const StyledSection = styled.section`
   padding: 90px 0;
 
   
`
const AboutWrapper = styled.div`
   position: relative;
   z-index: 1;

   &::before {
      content: "VR";
      position: absolute;
      bottom: -56px;
      left: 0;
      z-index: -1;

      ${font({family: "Qanelas Soft",weight: 700,Fmax: 418, Fmin: 118, lineHeight: "75px"})};
      -webkit-text-stroke: 7px rgba(235, 131, 130, 1);
      color: transparent;

      opacity:0.04;
   }
`

const StyledImg = styled.div`
   position: relative;
`

const StyledScreen = styled.div`
   position: absolute;
   top: -22px;
   left: 42%;
`


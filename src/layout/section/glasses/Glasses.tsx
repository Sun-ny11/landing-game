import React from "react";
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { Icon } from "../../../components/icon/Icon";
import {LgGlasses} from "../../../components/lgIcon/LgGlasses"
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Glasses =() => {
   return (
         <section>      
            <FlexWrapper align="center">
               <StyledImg>
                  <LgGlasses/>
               </StyledImg>

               <AboutSection preTitle={"About VR Glasses"} 
                           title={"The New VR GlassesSeries"}
                           text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."}/>
            </FlexWrapper>
         </section>
      
   );
};

const StyledImg = styled.div`
   position: relative;
`

const StyledScreen = styled.div`
   position: absolute;
   top: -22px;
   left: 42%;
`


import React from "react";
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { LgGameIsland } from "../../../components/lgIcon/LgGameIsland";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Console =() => {
   return (
      <section>
         <FlexWrapper align="center">
            <StyledImg>
               <LgGameIsland/>
            </StyledImg>

            <AboutSection preTitle={"About XBOX, PS"} 
                           title={"The New Xbox, Ps Series"} 
                           text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."}/>
         </FlexWrapper>
      </section>
   );
};

const StyledImg = styled.div`
   position: relative;
   
`

const StyledGameBoy = styled.div`
   position: absolute;
   bottom: 0;
`
import React from "react";
import styled from "styled-components";
import { Cards } from "../../../components/cards/Cards";
import { FlexWrapper } from "./../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon";
import { AboutSection } from "../../../components/aboutSection/AboutSection";
import { LgMiniVr } from "../../../components/lgIcon/LgMiniVr"
import { LgMiniGameBoy } from "../../../components/lgIcon/LgMiniGameBoy";
import { LgMainRing } from "../../../components/lgIcon/LgMainRing";

export const Main =() => {
   return (
      <StyledSection>
         <FlexWrapper align="center" direction={"row-reverse"} >
            <StyledMainImg>
               <LgMainRing/>
               <StyledActivMan>
                  <Icon iconId={"mainMan"} width={"543"} height={"585"} viewBox={"0 0 543 585"}/>
                  <div>
                     <Icon iconId={"tripleQuotes"}/>
                  </div>
               </StyledActivMan>

               <Cards nameIcon={LgMiniVr}/>
               <Cards nameIcon={LgMiniGameBoy}/>
            </StyledMainImg>

            <AboutSection preTitle={"Gaming Consoles"} 
                           title={"Try It, Rent It, Save $50!"} 
                           text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed."} />

         </FlexWrapper>
         
      </StyledSection>
   );
};

const StyledSection = styled.section`
   
`
const StyledMainImg = styled.div`
   position: relative;
`
const StyledActivMan = styled.div`
   position: absolute;
   bottom: 32%;
   right: 19px;

   &>div {
      position: absolute;
      left: 90px;
      top: 48px;
   }
   

`
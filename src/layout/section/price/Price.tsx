import React from "react";
import { PreTitleAndTitle } from "../../../components/aboutSection/PreTitleAndTitle";
import { PriceCard } from "../../../components/priceCard/PriceCard";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";



export const Price =() => {
   return (
      <section>
         <FlexWrapper align="center" direction="column">
            <PreTitleAndTitle preTitle={"Our Pricing"} title={"Choose Your Plan"}/>
            <StyledPrice>
               <PriceCard plan={"Basic"} price={"$50.00 / Per Hour"}/>
               <PriceCard plan={"Standard"} price={"$95.00 / Per Hour"}/>
               <PriceCard plan={"Premium"} price={"$120.00 / Per Hour"}/>
            </StyledPrice>
         </FlexWrapper>
      </section>
   );
};

const StyledPrice = styled.div`
   display:flex;
`
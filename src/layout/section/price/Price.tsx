import React from "react";
import { PreTitleAndTitle } from "../../../components/aboutSection/PreTitleAndTitle";
import { PriceCard } from "../../../components/priceCard/PriceCard";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Container } from "../../../components/Container";



export const Price: React.FC =() => {
   return (
      <StyledSection id={"prices"}>
         <Container>
            <FlexWrapper align="center" direction="column">
               <PreTitleAndTitle align="center" preTitle={"Our Pricing"} title={"Choose Your Plan"}/>
               <StyledPrice>
                  <PriceCard plan={"Basic"} price={"$50.00"}/>
                  <PriceCard plan={"Standard"} price={"$95.00"}/>
                  <PriceCard plan={"Premium"} price={"$120.00"}/>
               </StyledPrice>
            </FlexWrapper>
         </Container>
      </StyledSection>
   );
};


const StyledSection = styled.section`
   padding: 50px 0 90px;
`
const StyledPrice = styled.div`
   min-width: 100%;
   display:flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 30px;
   margin-top: 90px;
`
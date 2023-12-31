import React from "react";
import styled from "styled-components";
import { font } from "../../styles/Common";

type ButtonPropsType ={
   width?:number
   name?: string
}
export const Button: React.FC<ButtonPropsType> =(props:ButtonPropsType) => {
   return (
      <Link {...props} href="#">{props.name || "Get Started Now"}</Link>
   );
};

const Link = styled.a<ButtonPropsType>`
   display: inline-block;
   min-width:${({ width }) => width}px;
   padding: 13px 0;
   background: linear-gradient(95deg, #4499D9 17.46%, #7367BE 87.77%);
   border-radius: 25px;
   text-align: center;

   ${font({color:"#FFF", weight:500, lineHeight: "24px", Fmax:18, Fmin:15})}
`
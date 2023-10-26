import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";



export const Menu: React.FC<{menuItems:Array<string>}> =(props:{menuItems:Array<string>}) => {
   return (
      <ul>
         {props.menuItems.map((item, index) =>{
            return   <li key={index}>
                        <Link href="">{item}</Link>
                     </li>
         })}
      </ul>
   );
};



const Link = styled.a`
   ${font({weight:500, color:theme.colors.preTitleColor, lineHeight: "24px", Fmax:18, Fmin:17})}

   position: relative;

   &:before{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0%;
      height: 3px;
      background-color: ${theme.colors.preTitleColor};
      border-radius: 5px;
      transition: .4s;
      opacity: 0.5;
   }

   &:hover:before {
      width:100%;
      left: 0;
   }
`
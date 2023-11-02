import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";
import { Link } from "react-scroll";


const menuItems = [
   {
      title: "Home",
      href: "home",
   },
   {
      title: "About Us",
      href: "about",
   },
   {
      title: "Prices",
      href: "prices",
   },
   {
      title: "Rules",
      href: "rules",
   },
]


export const Menu: React.FC =() => {
   return (
      <ul>
         {menuItems.map((item, index) =>{
            return   <li key={index}>
                        <NavLink 
                        to = {item.href}
                        smooth={true}
                        >{item.title}</NavLink>
                     </li>
         })}
      </ul>
   );
};



const NavLink = styled(Link)`
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
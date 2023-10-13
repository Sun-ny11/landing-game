import React from "react";
import { Button } from "../button/Button";
import { PreTitleAndTitle } from "./PreTitleAndTitle"


type AboutSectionPropsType = {
   preTitle: string
   title: string
   text: string
}


export const AboutSection =(props:AboutSectionPropsType) => {
   return (
      <div>
         <PreTitleAndTitle preTitle={props.preTitle} title={props.title}/>
         <p>{props.text}</p>
         <Button/>
      </div>
   );
};
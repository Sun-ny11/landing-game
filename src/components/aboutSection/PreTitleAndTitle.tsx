import React from "react";


type PreTitleAndTitlePropsType = {
   preTitle: string
   title: string
}


export const PreTitleAndTitle =(props:PreTitleAndTitlePropsType) => {
   return (
      <div>
         <span>{props.preTitle}</span>
         <h2>{props.title}</h2>
      </div>
   );
};
import React from "react";

type PriceCardPropsType ={
   plan: string
   price: string
}

const items = ["10 users included", "2 GB of storage", "Email support", "Help center access", "10 users included"];

export const PriceCard =(props:PriceCardPropsType) => {
   return (
      <div>
         <h3>{props.plan}</h3>
         <span>{props.price}</span>

         <ul>
            {items.map((item, index) => {
               return <li key="index">
                  {item}
               </li>
            })}
         </ul>
            
            <a href="#">Select This Plan</a>
      </div>
   );
};
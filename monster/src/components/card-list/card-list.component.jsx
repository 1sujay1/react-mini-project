import React from "react";
import './card-list.style.css';
import { Card } from "../card/card.componet";

export const CardList = ({monsters})=>{
   
    return (
        
        <div className="card-list">
            {monsters.map((item)=>
            <Card key={item.id} monster={item}/>
            )}
            </div>
    )
}
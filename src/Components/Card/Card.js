import React, { useState, useEffect } from 'react';

const Card = (kingData) => {
    const king = kingData.king
    return (
        <li>
            <div className="timeline-content ">
                <div>
                    <h2>{king.title} {king.name}</h2>
                    <p>Reigned for {king.reign}, and was a {king.status} {king.title}</p>
                </div> 
                <ul>
                    { king.alt_name.length > 0 && <li>Alt. Name: {king.alt_name}</li> }
                    <li>Father: {king.father}</li>
                    { king.mother.length > 0 && <li>Mother: {king.mother}</li> }
                    <li>Location: {king.location}</li>
                    <li>Death: {king.death}</li>
                    { king.age_of_acession.length > 0 && <li>Age of Acession: {king.age_of_acession}</li> }
                    <li>Note: {king.note}</li>
                    <li>Reference: {king.reference}</li>                                                                               
                </ul>   
            </div>
        </li>
    );
}

export default Card;

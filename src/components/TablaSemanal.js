import React from 'react';

export const TablaSemanal = ({ciudad,dias}) => {
    const k = 273.15;

  return (  
        <tr>
            <td >{ciudad}</td>
            {
                dias.map( ({temp, dt})=>(
                    <td
                        key={dt}
                    >Min.{' '+parseFloat(temp.min -k).toFixed(2) }<span>°C</span>, 
                    Max.{' '+parseFloat(temp.max - k).toFixed(2)}<span>°C</span></td>
                ))
            }
        </tr>
  );
};

import React from 'react';
import { IconTemp } from './IconTemp';

export const TablaSemanal = ({ciudad,dias}) => {
    const k = 273.15;

    // Renderizando componente de la tabla semanal
  return (  
        <tr>
            <td >{ciudad}</td>
            {
                dias.map( ({temp, dt})=>(
                    <td
                        key={dt}
                    >
                        <IconTemp
                        temp={temp}
                        ciudad={ciudad}
                        />
                        Min.{' '+parseFloat(temp.min -k).toFixed(1) }<span>°C</span><br/>
                    Max.{' '+parseFloat(temp.max - k).toFixed(1)}<span>°C</span>
                    </td>
                ))
            }
        </tr>
  );
};

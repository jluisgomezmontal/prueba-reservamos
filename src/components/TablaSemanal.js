import React from 'react';
import { IconTemp } from './IconTemp';

export const TablaSemanal = ({ciudad,dias}) => {
    const diaMasHumedo = dias.reduce( (acc, cur,idx ) => {
        if(cur.humidity > acc.humidity){
            return {
                idx,
                humidity: cur.humidity,
            }
        }
        return acc


    },{
        idx: -1,
        humidity: 0
    });
    const k = 273.15;

    // Renderizando componente de la tabla semanal
  return (  
        <tr>
            <td >{ciudad}</td>
            {
                dias.map( ({temp, dt, humidity},idx)=>(
                    <td
                        key={dt}
                    >
                        <IconTemp
                        temp={temp}
                        ciudad={ciudad}
                        />
                        Min.{' '+parseFloat(temp.min -k).toFixed(1) }<span>°C</span><br/>
                    Max.{' '+parseFloat(temp.max - k).toFixed(1)}<span>°C</span><br/>
                    <span id={diaMasHumedo.idx === idx && 'humedad'} >Humedad.{humidity}%</span>

                    </td>
                ))
            }
        </tr>
  );
};

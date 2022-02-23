import React from 'react';
import { TablaSemanal } from './TablaSemanal';


export const Table = ({semana, state, }) => {
  return (
    <table className="table">
    <thead>
    <tr>
        <th>Ciudad</th>
        {
            // Imprimiendo los dias de la semana
            semana.map( (s,index) =>(
                <th key={index}>{s}</th>
            ))
        }

    </tr>
    </thead>
    <tbody>
    {
        // Imprimiendo las temperaturas de los proximos 7 dias
        state.map( ({id, ciudad, dias})=>(
            <TablaSemanal
            key={id}
            ciudad={ciudad}
            dias={dias}
            />
        ))
    }
    </tbody>
    </table>
  );
};

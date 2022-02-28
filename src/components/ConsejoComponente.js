import React from 'react';

export const ConsejoComponente = ({consejos, setBusqueda}) => {
  return (
      <div className="consejos">
          <h3>Sigerencias</h3>
          {
            consejos.map(c=>(
                <input id="consejo" type="submit" onClick={ e=> setBusqueda(c)} value={c}/>
            ))
          }
      </div>
  );
};

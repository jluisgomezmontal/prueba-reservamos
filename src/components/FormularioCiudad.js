import React from 'react';
import { ConsejoComponente } from './ConsejoComponente';

export const FormularioCiudad = ({handleSubmit, busqueda, setBusqueda, error,ciudadRepetida, consejos}) => {
    
  // Componente encargado de renderizar del formulario
  return (
    <form onSubmit={handleSubmit}>

    <div >
        <label htmlFor="ciudad">Ciudad: </label>
        <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={busqueda}
            onChange={e=>setBusqueda(e.target.value)}
        />
    {
        // Mostrando los respectivos error en caso de haber
        error ? <p className="error">Ingrese una ciudad</p> :
        ciudadRepetida ? <p className="error">La ciudad ya esta en la lista</p> : null
    }
    {
        consejos.length > 2 &&
        <ConsejoComponente
        consejos={consejos}
        setBusqueda={setBusqueda}
        />
    }
    </div>
    
    <input
        type="submit"
        value="Buscar"
        className="buscador"
    />
    

</form>
  );
};

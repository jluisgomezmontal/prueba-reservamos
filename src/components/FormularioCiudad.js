import React from 'react';

export const FormularioCiudad = ({handleSubmit, busqueda, setBusqueda, error,ciudadRepetida}) => {
    
  // Componente encargado de renderizar del formulario
  return (
    <form onSubmit={handleSubmit}>

    <div className=''>
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
    </div>
    
    <input
        type="submit"
        value="Buscar"
        className=""
    />
    

</form>
  );
};

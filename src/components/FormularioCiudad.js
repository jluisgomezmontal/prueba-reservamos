import React from 'react';

export const FormularioCiudad = ({handleSubmit, busqueda, setBusqueda, error,ciudadRepetida}) => {
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
        error ? <p className="error">Ingresa una ciudad</p> :
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

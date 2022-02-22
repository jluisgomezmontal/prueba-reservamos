import React from 'react';

export const FormularioCiudad = ({handleSubmit, busqueda, setBusqueda, error}) => {
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
        error ? <p className="error">Ingresa una ciudad</p> : null
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

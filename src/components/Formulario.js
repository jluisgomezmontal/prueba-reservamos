import React, { useEffect, useReducer, useState } from 'react';
import { usePronostico } from '../hooks/usePronostico';
import { useSemana } from '../hooks/useSemana';
import { FormularioCiudad } from './FormularioCiudad';
import { Spinner } from './Spinner';
import { TablaSemanal } from './TablaSemanal';

let fecha= new Date();
let hoy = fecha.getDay()

const init = () => {
    return []
}
export const Formulario = () => {
    
    //Variables
    const [state, dispatch] = useReducer(usePronostico, [],init)
    
    const [busqueda, setBusqueda] = useState('')
    
    const [consultar, setConsultar] = useState(false)
    
    const [error, setError] = useState(false)

    const [cargando, setCargando] = useState(false);

    const [ciudadRepetida, setCiudadRepetida] = useState(false);
    
    const semana = useSemana(hoy);
    
    // Hook para consultar la API de RESERVAMOS y de OpenWeatherMap

    useEffect(() => {
        const consultarAPI = async () => {
            if(consultar){
                // Consultando la API de RESERVAMOS
                const apiReservamos = `https://search.reservamos.mx/api/v2/places?q=${busqueda}`
                const respuestaReservamos = await fetch(apiReservamos)
                const resultadoReservamos = await respuestaReservamos.json()
                const { lat, long, city_name } = resultadoReservamos[0]

                // Consultando la API de OpenWeatherMap
                const apiKey = 'a5a47c18197737e8eeca634cd6acb581'
                const apiOpenWeatherMap = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`
                const respuestaOpenWeatherMap = await fetch(apiOpenWeatherMap)
                const resultadoOpenWeatherMap = await respuestaOpenWeatherMap.json()

                // Guardando los datos en un nuevo Objeto
                const newInput={
                    id: new Date().getTime(),
                    ciudad: city_name,
                    dias: resultadoOpenWeatherMap.daily,
                }
                
                // Haciendo el dispatch de nuestro objeto al reducer
                const action = {
                    type: 'add',
                    payload: newInput
                }
                dispatch(action)
                
                // Regresar consultar a falso para hacer multiples busquedas
                setConsultar(false)
                setCargando(false)
                setBusqueda('')
            }
        }
        consultarAPI();
    }, [consultar])

    // Manejando el subit del formulario
    const handleSubmit = e => {
        //evitar que recargue el componente
        e.preventDefault();

        // Validando que no haya errores al buscar una ciudad
        if(busqueda.trim()===''){
            setError(true) 
            return;
        }
        if (state.some(e => e.ciudad === busqueda)) {
            setCiudadRepetida(true);
            return;
        }
        setError(false)
        setCiudadRepetida(false);
        setConsultar(true)
        setCargando(true)
    }
    console.log(ciudadRepetida)
  return (
    <div>
        {// Cargando componente encargado de la busqueda de la ciudad
        }
        <FormularioCiudad
            handleSubmit={handleSubmit}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            error={error}
            ciudadRepetida={ciudadRepetida}
        />
        {
            // Validando que haya contenido en el state de ciudades
            cargando ?
            <Spinner/> :
            state.length>0 ? 
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
            :null
        }
    </div>
  );
};

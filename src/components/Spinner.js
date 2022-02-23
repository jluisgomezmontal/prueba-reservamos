import './spinner.css';

export const Spinner = () => {
  // Componente encargado de renderizar el spinner
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
};

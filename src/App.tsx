import React, { ReactNode } from 'react';
import './App.css';

interface BlogProps {
  children: ReactNode;
  titulo: string;
}

interface ArticuloProps {
  children: ReactNode;
  contenido: string;
}

const Blog: React.FC<BlogProps> = (props) => (
  <div className='container'>
    <h1 className='titulo'>{props.titulo}</h1>
    {props.children}
  </div>
);

const Articulo: React.FC<ArticuloProps> = (props) => (
  <div className='tarjeta'>
    <h1 className='container'>{props.children}</h1>
    <p children={props.contenido} className='contenido' />
  </div>
);

function App() {
  const contenidoDeclarativo =
    'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.';
  const contenidoComponentes =
    'Con React creas componentes encapsulados que manejan su propio estado, y los conviertes en interfaces de usuario complejas. Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.';

  return (
    <Blog titulo='CARACTERÍSTICAS DE REACT'>
      <Articulo contenido={contenidoDeclarativo}>Declarativo</Articulo>
      <Articulo contenido={contenidoComponentes}>
        Basado en Componentes
      </Articulo>
    </Blog>
  );
}

export default App;

import React, { ReactNode } from 'react';
import './App.css';

interface BlogProps {
  children: ReactNode;
  title: string;
}

interface ArticleProps {
  children: ReactNode;
  content: string;
}

const Blog: React.FC<BlogProps> = (props) => (
  <div className='container'>
    <h1 className='title'>{props.title}</h1>
    {props.children}
  </div>
);

const Article: React.FC<ArticleProps> = (props) => (
  <div className='card'>
    <h1 className='container'>{props.children}</h1>
    <p children={props.content} className='content' />
  </div>
);

function App() {
  const declarativeContent =
    'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.';
  const componentsContent =
    'Con React creas componentes encapsulados que manejan su propio estado, y los conviertes en interfaces de usuario complejas. Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.';

  return (
    <Blog title='CARACTERÍSTICAS DE REACT'>
      <Article content={declarativeContent}>Declarativo</Article>
      <Article content={componentsContent}>Basado en Componentes</Article>
    </Blog>
  );
}

export default App;

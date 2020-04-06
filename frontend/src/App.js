import React from 'react';

import './global.css';

import Routes from './routes';

//Componentes em React é uma função que retorna HTML
//JSX (Javascript and XML) é HTML escrito dentro do Javascript

function App() {
  /**
   * useState retorna um array com duas posições, primeiro é o valor e na segunda posição uma função de atualização do valor 
   * const [counter, setCounter] = useState(0);
   * function increment() {
   *    setCounter(counter + 1);
   *  }
*/
  return (

    <Routes />

    /**
     * <div>
     *    <Header>Contador: {counter}</Header>
     *    <button onClick={increment}>Incrementar</button>
     * </div>
     * 
     * Conteudo passado como atributo(TITLE) pelo parâmetro PROPS para a função HEADER 
     * <Header title="Semana omnistack" />
     * 
     * A propriedade CHILDREN criada automaticamente, retorna todo o conteudo dentro da TAG pelo parâmetro PROPS para fnção HEADER
     * <Header>Semana omnistack</Header>
     **/
  );
}

export default App;

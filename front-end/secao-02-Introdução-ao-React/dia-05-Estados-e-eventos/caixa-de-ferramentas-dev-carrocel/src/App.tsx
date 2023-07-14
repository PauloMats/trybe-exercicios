import { useState } from 'react'
import './App.css'

function App() {
  const toolKit = [
         'JavaScript',
         'TypeScript',
         'React',
         'HTML',
         'CSS',
         'Node',
         'Testes automatizados',
       ];

       const [index, setIndex] = useState(0);
  return (
    <>
     <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{ toolKit[index] }</h2>
       <button>Anterior</button>
       <button>Próximo</button>
    </>
  )
}

export default App

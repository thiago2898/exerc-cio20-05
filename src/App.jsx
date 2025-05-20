// import { useState } from "react"

// export default function App() {
//   // Formas de criar chamadas de state / estados
//   const [nome, setNome] = useState('')
//   const [idade, setIdade] = useState('')
//   const [cidade, setCidade] = useState('')
//   const [cadastro, setCadastro] = useState('')

//   const enviarCadastro = () => setCadastro(`${nome}, ${idade} e ${cadastro}`)

//   return (
//     <div>
//       <h2>Cadastro</h2>
      
//       <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/> {/*Carregar o novo valor do estado nome*/}
//       <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/> {/*Carregar o novo valor do estado idade*/}
//       <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/> {/*Carregar o novo valor do estado cidade*/}

//       <button onClick={enviarCadastro}>Enviar</button>
//       <p>{cadastro}</p>
      
//     </div>
//   )
// }

import FormCadastro from "./components/FormCadastro"

export default function App() {
  return (
    <div>
      <FormCadastro />
    </div>
  )
}
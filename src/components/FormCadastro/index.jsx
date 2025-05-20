import { useState } from "react"

export default function FormCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')
    const [mensagem, setMensagem] = useState('')

    const enviarDados = () => {
        if (nome && curso && email) {
            setMensagem(`Cadastro de ${nome} para o curso ${curso} com email ${email} realizado com sucesso!`)
        }
    }

    return (
        <div className="login-container">
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Curso" value={curso} onChange={(e) => setCurso(e.target.value)} />

            <button onClick={enviarDados}>Enviar</button>
            <p>{mensagem}</p>
        </div>
    )
}
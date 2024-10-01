import * as React from "react"
import Input from "../../itensComponents/input"

const Nome = ({ Dados, InputChange, editable }) => {
    return (
        <Input
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            name="nomeCompleto"
            value={Dados.nomeCompleto}
            onChange={InputChange}
            editable={editable}
        />
    )
}

export default Nome
import * as React from "react"
import Input from "../../itensComponents/input"

const Email = ({ Dados, InputChange, editable }) => {
    return (
        <Input
            label="Seu Email"
            placeholder="Digite seu email para receber a compra"
            name="email"
            value={Dados.email}
            onChange={InputChange}
            editable={editable}
        />
    )
}

export default Email
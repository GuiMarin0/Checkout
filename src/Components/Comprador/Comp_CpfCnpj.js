import * as React from "react"
import Input from "../../itensComponents/input"

const CpfCnpj = ({ Dados, InputChange, editable }) => {
    return (
        <Input
            label="CPF/CNPJ"
            placeholder="Digite o número do seu CPF ou CNPJ"
            width="45%"
            name="cpfCnpj"
            value={Dados.cpfCnpj}
            onChange={InputChange}
            editable={editable}
        />
    )
}

export default CpfCnpj
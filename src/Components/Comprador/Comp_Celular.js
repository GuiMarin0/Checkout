import * as React from "react"
import Input from "../../itensComponents/input"

const Celular = ({ Dados, InputChange, editable }) => {
    return (
        <Input
            label="Celular"
            placeholder="(18) 12345-6789"
            width="45%"
            name="celular"
            value={Dados.celular}
            onChange={InputChange}
            editable={editable}
        />
    )
}

export default Celular
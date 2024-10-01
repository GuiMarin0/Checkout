import * as React from "react"
import styled from "styled-components"

import Email from "../Components/Comprador/Comp_Email"
import Nome from "../Components/Comprador/Comp_Nome"
import CpfCnpj from "../Components/Comprador/Comp_CpfCnpj"
import Celular from "../Components/Comprador/Comp_Celular"
import Endereco from "../Components/Comprador/Comp_Endereco"

const TituloSection = styled.h2`
    font-family: sans-serif;
`

const InputsJuntos = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CompradorSection = ({ Dados, InputChange, schemaCustomer }) => {

    // Verifica se o campo pode ser editado no schema
    const isEditable = (fieldType) => {
        if (!schemaCustomer) return false;
        const fieldSchema = schemaCustomer.find(item => item.type === fieldType);
        return fieldSchema && fieldSchema.editable;
    };

    return (
        <>
            <TituloSection>Identidade</TituloSection>
            {/*Email*/}
            <Email
                Dados={Dados}
                InputChange={InputChange}
                editable={isEditable("email")} />

            {/*Nome*/}
            <Nome
                Dados={Dados}
                InputChange={InputChange}
                editable={isEditable("name")} />

            <InputsJuntos>
                {/*Identidade*/}
                <CpfCnpj
                    Dados={Dados}
                    InputChange={InputChange}
                    editable={isEditable("cpf_cnpj")} />

                {/*Celular*/}
                <Celular
                    Dados={Dados}
                    InputChange={InputChange}
                    editable={isEditable("phone")} />
            </InputsJuntos>

            {/*------------------------------------------------------------------------------*/}

            <hr />
            <TituloSection>Endereço</TituloSection>

            <Endereco
                Dados={Dados}
                InputChange={InputChange}
                editable={isEditable("address")} />
        </>
    )
}

export default CompradorSection
import * as React from "react"
import Input from "../../itensComponents/input"
import styled from "styled-components"

const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const InputsJuntos = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Endereco = ({ Dados, InputChange, editable }) => {
    return (
        <>
            {/*CEP*/}
            <Input
                label="Código postal (CEP)"
                placeholder="Digite aqui seu CEP"
                name="cep"
                value={Dados.cep}
                onChange={InputChange}
                editable={editable}
            />

            <InputsJuntos>
                {/*Estado*/}
                <Input
                    label="Estado"
                    placeholder="Selecione"
                    width="20%"
                    opcoes={estados}
                    name="estado"
                    value={Dados.estado}
                    onChange={InputChange}
                    editable={editable} />

                {/*Cidade*/}
                <Input
                    label="Cidade"
                    placeholder="Onde voce mora?"
                    width="35%"
                    name="cidade"
                    value={Dados.cidade}
                    onChange={InputChange}
                    editable={editable} />

                {/*Bairro*/}
                <Input
                    label="Bairro"
                    placeholder="Digite aqui o seu bairro"
                    width="35%"
                    name="bairro"
                    value={Dados.bairro}
                    onChange={InputChange}
                    editable={editable} />
            </InputsJuntos>

            {/*Endereço*/}
            <Input
                label="Endereço"
                placeholder="Qual seu endereço?"
                name="endereco"
                value={Dados.endereco}
                onChange={InputChange}
                editable={editable} />

            <InputsJuntos>
                {/*Numero*/}
                <Input
                    label="Número"
                    placeholder="000"
                    width="45%"
                    name="numero"
                    value={Dados.numero}
                    onChange={InputChange}
                    editable={editable} />

                {/*Complemento*/}
                <Input
                    label="Complemento"
                    placeholder="Apto/Bloco/Fundos..."
                    width="45%"
                    name="complemento"
                    value={Dados.complemento}
                    onChange={InputChange}
                    editable={editable} />
            </InputsJuntos>
        </>
    )
}

export default Endereco
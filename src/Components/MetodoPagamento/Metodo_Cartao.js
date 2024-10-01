import * as React from "react"
import styled from "styled-components"
import Input from "../../itensComponents/input"

const ContainerPagamento = styled.form`
    width: 100%;
    margin-top: 20px;
`

const InputJuntos = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ContainerDivido = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const InputJuntosCartao = styled.div`
    width: 48%;
`

const ContainerCartão = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 48%;
`

const Cartao = styled.div`
    width: 95%;
    height: 80%;
    background: #bdc3c7; /* Fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 10px;
`

const meses = [
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
    "11", "12"
];

const anos = [
    "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034",
    "2035", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043",
    "2044", "2045", "2046", "2047", "2048", "2049", "2050"
];

const parcelas = [
    "1 x de R$ 120,60",
    "2 x de R$ 60,60",
    "3 x de R$ 40,60",
    "4 x de R$ 30,60",
    "5 x de R$ 24,61",
    "6 x de R$ 20,61",
    "7 x de R$ 17,75",
    "8 x de R$ 15,61",
    "9 x de R$ 13,95",
    "10 x de R$ 12,61",
    "11 x de R$ 11,52",
    "12 x de R$ 10,62"
];

const DadosCartao = ({ DadosPagamento, PagamentoChange }) => {



    return (
        <ContainerPagamento>
            <ContainerDivido>
                <InputJuntosCartao>
                    <Input
                        label="Número do cartão"
                        placeholder="Somente número"
                        name="numeroCartao"
                        value={DadosPagamento.numeroCartao}
                        onChange={PagamentoChange} />
                    <Input
                        label="Nome do titular"
                        placeholder="Nome impresso no cartão"
                        name="nomeTitular"
                        value={DadosPagamento.nomeTitular}
                        onChange={PagamentoChange} />
                    <InputJuntos>
                        <Input
                            label="Mês"
                            placeholder="MM"
                            name="mes"
                            opcoes={meses}
                            width="30%"
                            value={DadosPagamento.mes}
                            onChange={PagamentoChange} />
                        <Input
                            label="Ano"
                            placeholder="AA"
                            name="ano"
                            opcoes={anos}
                            width="30%"
                            value={DadosPagamento.ano}
                            onChange={PagamentoChange} />
                        <Input
                            label="CVV"
                            placeholder="CVV"
                            name="cvv"
                            width="30%"
                            value={DadosPagamento.cvv}
                            onChange={PagamentoChange} />
                    </InputJuntos>
                </InputJuntosCartao>

                <ContainerCartão>
                    <Cartao />
                </ContainerCartão>
            </ContainerDivido>
            <Input
                label="Selecione o número de parcelas"
                placeholder="Selecione"
                name="parcelas"
                opcoes={parcelas}
                value={DadosPagamento.parcelas}
                onChange={PagamentoChange} />
        </ContainerPagamento>
    )
}

export default DadosCartao
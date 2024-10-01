import * as React from "react"
import styled from "styled-components"

import { useState, useEffect } from "react"
import Button from "../itensComponents/botao"

import HeaderSection from "../Sections/Header"
import DescricaoSection from "../Sections/Descricao"
import CompradorSection from "../Sections/Comprador"
import PagamentoSection from "../Sections/Pagamento"

import CobrancaJson from "../Schemas/Cobranca.json"


const Global = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;           
  margin: 0;
  padding:20px 0px 20px 0px;
`

const SectionCheckout = styled.form`
    width: 50%;
    border: 1px solid #d8d8d8;
    padding: 20px;
    border-radius: 10px;
`

const CheckoutPage = () => {

    const [FormPagamento, setFormaPagamento] = useState("cartao");
    const [Dados, setDados] = useState({
        email: "",
        confirmaEmail: "",
        nomeCompleto: "",
        cpfCnpj: "",
        celular: "",
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        endereco: "",
        numero: "",
        complemento: ""
    });
    const [DadosPagamento, setDadosPagamento] = useState({
        numeroCartao: "",
        nomeTitular: "",
        mes: "",
        ano: "",
        cvv: "",
        parcelas: ""
    })

    const [schemaData, setSchemaData] = useState(null)
    const [schemaHeader, setSchemaHeader] = useState(null)
    const [schemaDescription, setSchemaDescription] = useState(null)
    const [schemaCustomer, setSchemaCustomer] = useState(null)
    const [schemaPayment, setSchemaPayment] = useState(null)
    const [schemaMoreInformations, setSchemaMoreInformations] = useState(null)
    const [schemaFooter, setSchemaFooter] = useState(null)
    const [products, setProducts] = useState([])

    const InputChange = (e) => {
        const { name, value } = e.target;
        setDados({
            ...Dados,
            [name]: value,
        })
    }

    const PagamentoChange = (e) => {
        const { name, value } = e.target;
        setDadosPagamento({
            ...DadosPagamento,
            [name]: value
        });
    };


    const MetodoChange = (FormaPagamento) => {
        setFormaPagamento(FormaPagamento);
    }

    useEffect(() => {
        if (schemaData) {
            setSchemaHeader(schemaData.schema[0].components);
            setSchemaDescription(schemaData.schema[1].components);
            setSchemaCustomer(schemaData.schema[2].components);
            setSchemaPayment(schemaData.schema[3].components);
            setSchemaMoreInformations(schemaData.schema[4].components);
            setSchemaFooter(schemaData.schema[5].components);
            setProducts(schemaData.data.attributes.products.data);

            // Carrega os dados do cliente no estado
            setDados({
                email: schemaData.data.attributes.customer.attributes.email || "",
                nomeCompleto: schemaData.data.attributes.customer.attributes.name || "",
                cpfCnpj: schemaData.data.attributes.customer.attributes.cpf_cnpj || "",
                celular: schemaData.data.attributes.customer.attributes.phone || "",
                // Aqui também incluir o endereço, se necessário
            });

        }
    }, [schemaData])

    useEffect(() => {
        setSchemaData(CobrancaJson);
    }, [])

    //tentei simular uma chamada a api localmente, mas não deu certo
    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Schemas/Cobranca.json'); // Caminho para o arquivo JSON local
                const data = await response.json();
                setSchemaData(data); // Atualiza o estado com o JSON recebido
            } catch (error) {
                console.error("Erro ao carregar o JSON", error);
            }
        };

        fetchData();
    }, [])*/

    if (!schemaData) {
        return <div>CARREGANDO...</div>
    }

    return (
        <Global>

            {/*COMPONENTIZADO TOTALMENTE*/}
            {/*JA ESTÁ DINÂMICO PELO SCHEMA*/}
            <HeaderSection schemaHeader={schemaHeader} />

            <SectionCheckout>

                {/*COMPONENTIZADO PARCIALMENTE, FALTANDO A LISTA DE PRODUTOS QUE NÃO ENTENDI MUITO BEM*/}
                {/*PERGUNTAR AO JOÃO TERÇA-FEIRA*/}
                {/*JA ESTÁ DINÂMICO PELO SCHEMA*/}
                <DescricaoSection
                    schemaDescription={schemaDescription}
                    products={products} />

                <hr />

                {/*COMPONENTIZADO TOTALMENTE*/}
                <CompradorSection
                    Dados={Dados}
                    InputChange={InputChange}

                    schemaCustomer={schemaCustomer}
                />

                <hr />

                {/*COMPONENTIZADO, FALTA DETALHES DO BOLETO E DO PIX*/}
                <PagamentoSection
                    MetodoChange={MetodoChange}
                    FormPagamento={FormPagamento}
                    DadosPagamento={DadosPagamento}
                    PagamentoChange={PagamentoChange}

                    schemaPayment={schemaPayment}
                />

                {/*FALTA O ESPAÇO LIVRE QUE NÃO ENTENDI MUITO BEM TAMBÉM*/}
                {/*PERGUNTAR AO JOÃO TERÇA-FEIRA*/}

                <br />

                <Button texto="Comprar Agora" to="" />

            </SectionCheckout>
            {/*falta footer*/}
        </Global>
    )
}

export default CheckoutPage
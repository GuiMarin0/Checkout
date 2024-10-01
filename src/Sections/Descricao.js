import * as React from "react"
import DescricaoSimples from "../Components/Descricao/Desc_DescSimples"
import { useState, useEffect } from "react"

const DescricaoSection = ({ schemaDescription, products }) => {

    const [Descricao, setDescricao] = useState({
        Imagem: "",
        Nome: "",
        Valor: ""
    })

    useEffect(() => {
        if (schemaDescription && schemaDescription.length > 0) {
            //pega o tipo de descrição do produto
            const descriptionType = schemaDescription?.[0]?.type;

            //se for descrição simples
            if (descriptionType === "simple_description") {
                //verificar existência do produto
                if (products && products.length > 0) {
                    const produto = products[0];
                    setDescricao({
                        Imagem: produto.attributes.image_url,
                        Nome: produto.attributes.name,
                        Valor: produto.attributes.unit_price.toFixed(2)
                    });
                }
            }
            //lista de produtos
            else {

            }
        }

    }, [schemaDescription, products])

    return (
        <>
            {schemaDescription && schemaDescription.find(desc => desc.type === "simple_description")
                ?
                (<DescricaoSimples Imagem={Descricao.Imagem} Nome={Descricao.Nome} Valor={Descricao.Valor} />)
                :
                <></>
            }
        </>
    )
}

export default DescricaoSection
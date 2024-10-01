import * as React from "react"
import { useEffect } from "react"
import Banner from "../Components/Header/Header_Banner"
import LogoAndNome from "../Components/Header/Header_LogoNome"

const HeaderSection = ({ schemaHeader }) => {

    // Verifica se o schemaHeader existe e é um array
    if (!schemaHeader) return null;

    // Função para verificar se um tipo específico está presente no schema
    const getComponentByType = (type) => {
        return schemaHeader.find(component => component.type === type);
    }

    // Verifica se há banner, logo e nome no schemaHeader
    const banner = getComponentByType("banner");
    const logo = getComponentByType("company_image");
    const companyName = getComponentByType("company_name");

    return (
        <>
            {banner ?
                <Banner bannerPath={banner.data.path} />
                : (
                    <LogoAndNome
                        logoPath={logo ? logo.data.path : null}
                        companyName={companyName ? companyName.data.path1 : null}
                    />
                )}
        </>
    )
}

export default HeaderSection
import * as React from "react"
import styled from "styled-components"

const BannerContent = styled.div`
    width: 50%;
    padding: 20px;
    border-radius:10px;
    margin-bottom: 30px;
    height: 100px;
    background: url(${(props) => props.bannerPath});
    background-size: cover;
`


const Banner = ({ bannerPath }) => {
    return (
        <BannerContent bannerPath={bannerPath} />
    )
}

export default Banner
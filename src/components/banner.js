import * as React from "react"
import styled from "styled-components"

const BannerContent = styled.div`
    width: 50%;
    padding: 20px;
    border-radius:10px;
    margin-bottom: 30px;
    height: 120px;
    background: #bdc3c7; /* Fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Banner = () => {
    return (
        <BannerContent />
    )
}

export default Banner
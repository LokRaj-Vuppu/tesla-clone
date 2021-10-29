import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <MainFooter>
            <a href="#">Tesla @ 2021</a>
            <a href="#">Privacy & Legal</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </MainFooter>
    )
}

export default Footer

const MainFooter = styled.div`
    a {
        text-decoration: none;
        color: gray;
        padding-bottom: 10px;
        padding-right: 20px;
    }
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

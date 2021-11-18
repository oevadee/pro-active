import React from "react";
import styled from "styled-components";

const SWrapper = styled.footer`
    width: 100%;
    height: 100px;
    border solid 1px red;
`;

export const Footer = () => {
    return (
        <SWrapper>
            <h1>test</h1>
        </SWrapper>
    );
};

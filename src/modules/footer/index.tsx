import React from "react";
import styled from "styled-components";

const SWrapper = styled.footer`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 12px;
`;

export const Footer = () => {
    return (
        <SWrapper>
            <p>@ 2021 Pro active</p>
        </SWrapper>
    );
};

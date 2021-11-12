import React from "react";
import styled from "styled-components";

const SSection = styled.section`
    height: 100%;
    height: calc(100vh - 80px);
    display: grid;
    place-items: center;

    > h1 {
        font-size: ${({ theme }) => theme.font.size.heading};
        color: ${({ theme }) => theme.colors.smokyBlack};
    }
`;

export const IntroSection = () => {
    return (
        <SSection>
            <h1>Website in progress...</h1>
        </SSection>
    );
};

import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navigation } from "../modules/navigation";
import { theme } from "../styles/theme";
import { GlobalStyle } from "./GlobalStyle";

const SWrapper = styled.div`
    min-height: 100vh;
    width: calc(100vw - 8px);
    display: grid;
    place-items: center;
`;

const SAppWrapper = styled.div`
    width: 100%;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <SWrapper>
            <ThemeProvider theme={theme}>
                <SAppWrapper>
                    <GlobalStyle />
                    <Navigation />
                    {children}
                </SAppWrapper>
            </ThemeProvider>
        </SWrapper>
    );
};

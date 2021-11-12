import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navigation } from "../modules/navigation";
import { theme } from "../styles/theme";
import { GlobalStyle } from "./GlobalStyle";

const SWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    max-width: 1320px;
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
                <GlobalStyle />
                <Navigation />
                {children}
            </ThemeProvider>
        </SWrapper>
    );
};

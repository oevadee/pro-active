import React, { ReactNode } from "react";
import { Footer } from "../modules/footer";
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
    height: 100%;
    width: 100%;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SMainWrapper = styled.main`
    width: 100%;
    height: calc(100% - 100px);
    flex: 1;
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
                    <SMainWrapper>{children}</SMainWrapper>
                    <Footer />
                </SAppWrapper>
            </ThemeProvider>
        </SWrapper>
    );
};

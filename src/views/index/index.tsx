import React from "react";
import styled from "styled-components";
import { IntroSection } from "./components/intro-section";

const SWrapper = styled.div`
    width: 100%;
`;

export const IndexView = () => {
    return (
        <SWrapper>
            <IntroSection />
        </SWrapper>
    );
};

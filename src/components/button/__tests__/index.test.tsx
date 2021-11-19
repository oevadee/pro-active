import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../index";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

describe("Test if the Copyright component is working as expected", () => {
    it("<Button /> matches snapshot", () => {
        const component = render(
            <ThemeProvider theme={theme}>
                <Button>Test</Button>
            </ThemeProvider>
        );
        expect(component).toMatchSnapshot();
    });
});

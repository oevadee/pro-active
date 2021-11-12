import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Navigation } from "../modules/navigation";
import "./layout.css";

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
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <SWrapper>
            <Navigation siteTitle={data.site.siteMetadata?.title || `Title`} />
            {children}
        </SWrapper>
    );
};

import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { navItems } from "./navItems";

const SNav = styled.nav`
    width: 100%;
    border: solid 1px red;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
`;

const SHeading = styled.h1`
    margin: 0;
`;

const SList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    list-style: none;
    cursor: pointer;

    > li {
        margin: 0 24px;
        font-size: 16px;
    }
`;

export const Navigation = () => {
    // const data = useStaticQuery(graphql);

    return (
        <SNav>
            <SHeading style={{ margin: 0 }}>
                <Link to="/">
                    <StaticImage
                        src="../../images/logo.png"
                        alt=""
                        layout="fullWidth"
                        style={{
                            width: 150,
                        }}
                    />
                </Link>
            </SHeading>
            <SList>
                {navItems.map(({ path, label }) => (
                    <li>{label}</li>
                ))}
            </SList>
        </SNav>
    );
};

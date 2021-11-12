import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navItems } from "./navItems";

const SNav = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
`;

const SList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    list-style: none;
    cursor: pointer;

    > li {
        margin: 0 24px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        transition: ${({ theme }) => theme.transition};

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

const SLink = styled(Link)`
    height: 60px;
    width: 160px;
    display: grid;
    grid-area: 1/1;
`;

export const Navigation = () => {
    const { file } = useStaticQuery(graphql`
        query LogoQuery {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `);

    const logo = getImage(file);

    return (
        <SNav>
            <SLink to="/">
                <GatsbyImage
                    style={{
                        gridArea: "1/1",
                    }}
                    objectFit="contain"
                    alt=""
                    image={logo}
                />
            </SLink>
            <SList>
                {navItems.map(({ path, label }) => (
                    <li>{label}</li>
                ))}
            </SList>
        </SNav>
    );
};

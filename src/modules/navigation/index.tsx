import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navItems } from "./navItems";
import { Button } from "../../components/button";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
`;

const SLogoLink = styled(AnchorLink)`
    width: 150px;
    display: grid;
    grid-area: 1/1;
`;

const SListItem = styled(AnchorLink)`
    margin: 0 24px;
    text-decoration: none;

    > li {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.smokyBlack};
        transition: ${({ theme }) => theme.transition};

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
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
            <SLogoLink to="/">
                <GatsbyImage
                    style={{
                        gridArea: "1/1",
                    }}
                    objectFit="contain"
                    alt=""
                    image={logo}
                />
            </SLogoLink>
            <SList>
                {navItems.map(({ path, label }) => (
                    <SListItem to={`/#${path}`}>
                        <li>{label}</li>
                    </SListItem>
                ))}
                <Button>Test the app</Button>
            </SList>
        </SNav>
    );
};

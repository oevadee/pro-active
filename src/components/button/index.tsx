import React, { ReactNode } from "react";
import styled from "styled-components";

const SButton = styled.button`
    border: solid 1px ${({ theme }) => theme.colors.primary};
    background: transparent;
    border-radius: 14px;
    padding: 8px 18px;
    margin-left: 24px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
        background: ${({ theme }) => theme.colors.primary};
        border: solid 1px transparent;

        > p {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    > p {
        color: ${({ theme }) => theme.colors.primary};
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.normal};
        font-weight: ${({ theme }) => theme.font.weight.bold};
    }
`;

interface Props {
    children: ReactNode;
}

export const Button = ({ children }: Props) => {
    return (
        <SButton>
            <p>{children}</p>
        </SButton>
    );
};

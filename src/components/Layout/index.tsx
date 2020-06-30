import React, { ReactNode } from 'react';

import { Body, Header, Wrapper } from './index.styled';

interface Props {
    children: ReactNode;
}

export default function LayoutComponent(props: Props) {
    return (
        <Wrapper>
            <Header>cleo.</Header>
            <Body>{props.children}</Body>
        </Wrapper>
    );
}

import React from 'react';

import { Transaction } from '../../../../types';

import {
    AmountWrapper,
    Body,
    ContentWrapper,
    DateWrapper,
    IdentifierLabel,
    IdentifierWrapper,
    Label,
    Wrapper,
} from './index.styled';

interface Props {
    transaction: Transaction;
}

export default function TransactionComponent({ transaction }: Props) {
    return (
        <Wrapper>
            <Body>
                <IdentifierWrapper>
                    <IdentifierLabel>Transaction ID: #{transaction.id}</IdentifierLabel>
                </IdentifierWrapper>
                <ContentWrapper>
                    <DateWrapper>
                        {new Date(transaction.date).toLocaleDateString()}
                        <Label>Date</Label>
                    </DateWrapper>
                    <AmountWrapper>
                        £{transaction.amount.toFixed(2)}
                        <Label>Amount</Label>
                    </AmountWrapper>
                </ContentWrapper>
            </Body>
        </Wrapper>
    );
}

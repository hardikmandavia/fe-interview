import React, { Component } from 'react';

import { FaChevronDown, FaChevronUp, FaFileInvoiceDollar, FaExchangeAlt } from 'react-icons/fa';

import { Bill, Transaction } from '../../../types';

import TransactionComponent from './Transaction';
import {
    IconWrapper,
    Name,
    NameWrapper,
    RemoveButton,
    Text,
    Total,
    TotalWrapper,
    Wrapper,
} from './index.styled';

interface Props {
    bill: Bill;
    onRemoveClick?: (id: string) => void;
}

interface State {
    showTransactions: boolean;
}

export default class RowComponent extends Component<Props, State> {
    state: State = {
        showTransactions: false,
    };

    handleTransactionsClick = () => {
        this.setState({ showTransactions: !this.state.showTransactions });
    };

    handleRemoveClick = () => {
        const { bill, onRemoveClick } = this.props;

        if (onRemoveClick) onRemoveClick(bill.id);
    };

    render() {
        const { name, transactions, isBill } = this.props.bill;

        const total = transactions
            .reduce((accumulator: number, next: Transaction) => accumulator + next.amount, 0)
            .toFixed(2);

        const icon = isBill ? <FaExchangeAlt /> : <FaFileInvoiceDollar />;
        const title = isBill ? 'Remove bill' : 'Add as bill';
        return (
            <>
                <Wrapper>
                    <NameWrapper>
                        <Name>{name}</Name>
                        <Text>{transactions.length} transactions</Text>
                    </NameWrapper>
                    <TotalWrapper>
                        <Total>£{total}</Total>
                        <RemoveButton onClick={this.handleRemoveClick} data-tooltip={title}>
                            {icon}
                        </RemoveButton>
                        <IconWrapper>
                            {this.state.showTransactions ? (
                                <FaChevronUp onClick={this.handleTransactionsClick} />
                            ) : (
                                <FaChevronDown onClick={this.handleTransactionsClick} />
                            )}
                        </IconWrapper>
                    </TotalWrapper>
                </Wrapper>
                {this.state.showTransactions && (
                    <div>
                        {transactions.map((t: Transaction) => (
                            <TransactionComponent transaction={t} key={t.id} />
                        ))}
                    </div>
                )}
            </>
        );
    }
}

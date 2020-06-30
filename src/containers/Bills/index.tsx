import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { actions, BillsActionType } from '../../store/actions/bills';

import { BillsMap, Tab, Bill } from '../../types';

import BillsComponent from '../../components/Bills';
import TabsComponent from '../../components/Tabs';

interface Props {
    billsById: BillsMap;
    billsIds: string[];
    fetchBills: () => void;
    updateBill: (bill: Bill) => void;
}

class BillsContainer extends Component<Props> {
    componentDidMount() {
        this.props.fetchBills();
    }

    toggleTransaction = (id: string) => {
        const { billsById, updateBill } = this.props;

        const bill = { ...billsById[id] };
        bill.isBill = !bill.isBill;

        updateBill(bill);
    };

    getList = () => {
        const { billsById, billsIds } = this.props;

        return billsIds.map((b: string) => billsById[b]);
    };

    getTabs = (): Tab[] => {
        const all = this.getList();
        const bills = all.filter((b: Bill) => b.isBill);
        const potentialBills = all.filter((b: Bill) => !b.isBill);

        return [
            {
                title: 'Bills',
                component: <BillsComponent list={bills} onRemoveClick={this.toggleTransaction} />,
            },
            {
                title: 'Transactions',
                component: (
                    <BillsComponent list={potentialBills} onRemoveClick={this.toggleTransaction} />
                ),
            },
        ];
    };

    render() {
        return <TabsComponent tabs={this.getTabs()} />;
    }
}

const mapStateToProps = (state: AppState) => ({
    billsById: state.bills.byId,
    billsIds: state.bills.allIds,
});

const mapDispatchToProps = (dispatch: Dispatch<BillsActionType>) => ({
    fetchBills: () => dispatch(actions.fetch()),
    updateBill: (bill: Bill) => dispatch(actions.update(bill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillsContainer);

import React from 'react';

import { Bill } from '../../types';

import Row from './Row';

interface Props {
    list: Bill[];
    onRemoveClick?: (id: string) => void;
}

export default function BillsComponent({ list, onRemoveClick }: Props) {
    return (
        <div>
            {list.map((b: Bill) => (
                <Row key={b.id} bill={b} onRemoveClick={onRemoveClick} />
            ))}
        </div>
    );
}

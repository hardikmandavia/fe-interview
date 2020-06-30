import { ReactNode } from 'react';

export interface Bill {
    categoryId: number;
    iconUrl: string;
    id: string;
    isBill: boolean;
    name: string;
    transactions: Transaction[];
}

export interface BillsMap {
    [key: string]: Bill;
}

export interface Category {
    iconUrl: string;
    id: number;
    name: string;
}

export interface Transaction {
    amount: number;
    date: string;
    id: number;
}

export interface Tab {
    title: string;
    component: ReactNode;
}

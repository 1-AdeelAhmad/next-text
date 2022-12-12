import { ReactNode } from 'react';

export type ButtonProps = {
    label: string;
    buttonAction?: () => void;
};

export type CardProps = {
    title: string;
    image?: string;
};

export type InfiniteScrollComponentProps = {
    children: ReactNode;
    dataLength: number;
    nextFunction: () => void;
};

export type SearchFilterButtonsProps = {
    handleFilter: (dataType: SortedDataTypes) => void;
};

export type SearchFormProps = {
    handleSubmitSearch: (searchValue: string) => void;
};

export type SearchResultsProps = {
    dataFilterType: SortedDataTypes;
    musicData: any[]
};

export type ResultProps = {
    musicData: any[];
    dispatchNext: (type: SortedDataTypes) => void;
};


export type SortedDataTypes = 'songs' | 'artists' | 'albums';
export type DispatchPayload = { text: string; next10?: boolean; itemCount?: number };

export type TitleComponentProps = {
    title: string;
};

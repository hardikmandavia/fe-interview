import styled from 'styled-components';

import { StyleConstants } from '../../../shared/constants';

export const IconWrapper = styled.div`
    padding: 10px;
    cursor: pointer;
`;

export const Name = styled.span`
    font-size: 14px;
    font-weight: bold;
`;

export const NameWrapper = styled.div`
    padding: 10px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

export const RemoveButton = styled.button`
    margin: 2px 0 0 7px;
    background: white;
    border: none;
    color: ${StyleConstants.colors.darkgrey};
    cursor: pointer;
    padding: 3px 6px 1px;

    &:hover::after {
        position: absolute;
        content: attr(data-tooltip);
        margin-left: -50px;
        margin-top: 20px;
        background-color: ${StyleConstants.colors.charcoal};
        color: white;
        padding: 4px 8px;
        border-radius: 5px;
    }
`;

export const Text = styled.span`
    font-size: 12px;
`;

export const Total = styled.span`
    font-size: 16px;
`;

export const TotalWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${StyleConstants.colors.grey};
`;

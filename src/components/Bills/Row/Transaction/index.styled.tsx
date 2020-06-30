import styled from 'styled-components';

import { StyleConstants } from '../../../../shared/constants';

export const AmountWrapper = styled.div`
    font-size: 14px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 5px 10px 0;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

export const DateWrapper = styled.div`
    font-size: 12px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const IdentifierLabel = styled.span`
    font-size: 12px;
    color: ${StyleConstants.colors.darkgrey};
`;

export const IdentifierWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 14px;
    justify-content: center;
`;

export const Label = styled.span`
    font-size: 10px;
    color: ${StyleConstants.colors.darkgrey};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${StyleConstants.colors.grey};
    padding: 10px 20px 5px;
`;

import styled from 'styled-components';

import { StyleConstants } from '../../shared/constants';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 1200px;
`;

export const TabsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const TabLink = styled.button<{ active: boolean }>`
    background-color: ${StyleConstants.colors.grey};
    height: 55px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: none;

    ${({ active }) =>
        active &&
        `
    border-bottom: 6px solid ${StyleConstants.colors.blue};
    background-color: white;
    outline: none;
  `}
`;

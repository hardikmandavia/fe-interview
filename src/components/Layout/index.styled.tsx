import styled from 'styled-components';

import { StyleConstants } from '../../shared/constants';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    background-color: ${StyleConstants.colors.blue};
    color: white;
    font-weight: bold;
    font-size: 18px;
    width: 100%;
    height: 55px;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled(Body)`
    width: 100%;
    height: 100vh;
`;

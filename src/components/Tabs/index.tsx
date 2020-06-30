import React, { Component } from 'react';

import { Tab } from '../../types';

import { TabLink, TabsWrapper, Wrapper } from './index.styled';

interface Props {
    tabs: Tab[];
}

interface State {
    selectedIndex: number;
}

export default class TabsComponent extends Component<Props, State> {
    state: State = {
        selectedIndex: 0,
    };

    handleTabClick = (selectedIndex: number) => {
        this.setState({ selectedIndex });
    };

    renderTabs() {
        const { tabs } = this.props;
        const { selectedIndex } = this.state;

        return tabs.map((t: Tab, i: number) => (
            <TabLink key={i} active={i === selectedIndex} onClick={() => this.handleTabClick(i)}>
                {t.title}
            </TabLink>
        ));
    }

    render() {
        const { tabs } = this.props;
        const { selectedIndex } = this.state;
        return (
            <Wrapper>
                <TabsWrapper>{this.renderTabs()}</TabsWrapper>
                {tabs[selectedIndex].component}
            </Wrapper>
        );
    }
}

import React from 'react';
import styled from 'styled-components';
import Top from './top/top';
import LeftSidebarIndex from '../common/LeftSidebar';
import RightSidebarIndex from '../common/right/RightBar';
import Feed from '../common/feed/feed';
import Content from './content/Content';

const HomeIndex: React.FC = () => {
    return (
        <HomeStyles>
            <LeftSidebarIndex />
            <Content />
            <RightSidebarIndex />
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
    width: 100%;
    display:flex;
    gap:1rem;
    height: 100vh;
    overflow: auto;
    align-items: flex-start;
    @media (min-width:1380px) {
        max-width: 1380px;
        margin: 0 auto;
    }
  `

export default HomeIndex
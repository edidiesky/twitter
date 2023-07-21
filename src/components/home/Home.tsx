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
    /* @media (max-width:1180px) {
        grid-template-columns: 120px 1fr .7fr;
  }
  @media (max-width:980px) {
    grid-template-columns: 100px 1fr .2fr;
  }
  @media (max-width:780px) {
        grid-template-columns: 100px 1fr;
  }
  @media (max-width:480px) {
        grid-template-columns: 1fr;
  } */
  `

export default HomeIndex
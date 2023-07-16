import React from 'react';
import styled from 'styled-components';
import Top from './top/top';
import Feed from './feed/feed';
import LeftSidebarIndex from '../common/LeftSidebar';
import RightSidebarIndex from '../common/right/RightBar';

const HomeIndex: React.FC = () => {
    return (
        <div className="w-100">
            <HomeStyles>
                <LeftSidebarIndex />
                <div className="w-100 h-100 flex column gap-1">
                    <Top />
                    <Feed />
                </div>
                <RightSidebarIndex />
            </HomeStyles>

        </div>
    )
}

const HomeStyles = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25vw 1fr 30vw;
    grid-gap: 1rem;
    min-height: 100vh;
    @media (max-width:1080px) {
        grid-template-columns: 150px 1fr .6fr;
  }
  @media (max-width:980px) {
    grid-template-columns: 100px 1fr;
  }
  @media (max-width:780px) {
        grid-template-columns: 100px 1fr;
  }
  `

export default HomeIndex
import React from 'react';
import styled from 'styled-components';
import Top from './top/top';
import Feed from './feed/feed';
import LeftSidebarIndex from '../common/LeftSidebar';
import RightSidebarIndex from '../common/RightBar';

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
    grid-template-columns: 25vw 1fr 25vw;
    grid-gap: 1rem;
    min-height: 100vh;
  `

export default HomeIndex
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
                <div className="w-100 wrap h-100 flex column gap-1">
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
    grid-template-columns: 22vw 1fr 30vw;
    grid-gap: 1rem;
    min-height: 100vh;
    
    .wrap {
        border-right : 1px solid rgba(0,0,0,.1);
        border-left : 1px solid rgba(0,0,0,.1);
        @media (max-width:980px) {
    border-right : 1px solid rgba(0,0,0,.1);

        }
    }
    @media (max-width:1180px) {
        grid-template-columns: 120px 1fr .7fr;
  }
  @media (max-width:980px) {
    grid-template-columns: 100px 1fr .3fr;
  }
  @media (max-width:780px) {
        grid-template-columns: 100px 1fr;
  }
  `

export default HomeIndex
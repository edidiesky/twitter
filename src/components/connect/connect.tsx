import React from 'react';
import styled from 'styled-components';
import LeftSidebarIndex from '../common/LeftSidebar';
import RightSidebarIndex from '../common/right/RightBar';
import ConnectList from './list';

const Connect: React.FC = () => {
    return (
        <ConnectStyles>
            <LeftSidebarIndex />
            <ConnectList/>
            <RightSidebarIndex />
        </ConnectStyles>
    )
}

const ConnectStyles = styled.div`
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

export default Connect
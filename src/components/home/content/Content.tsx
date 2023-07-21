import React from 'react';
import styled from 'styled-components';
import Top from '../top/top';
import Feed from '@/components/common/feed/feed';

const Content: React.FC = () => {
    return (
        <ContentStyles>
            <Top />
            <Feed />
        </ContentStyles>
    )
}

const ContentStyles = styled.div`
        flex:1;
        border-right : 1px solid rgba(0,0,0,.1);
        border-left : 1px solid rgba(0,0,0,.1);
        min-height: 100vh;
        /* background-color: red; */
        @media (max-width:980px) {
    border-right : 1px solid rgba(0,0,0,.1);
        }
    
  `

export default Content
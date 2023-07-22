import React from 'react';
import styled from 'styled-components';
import LeftContent from './leftcontent';
import RightContent from './rightcontent';

const Content: React.FC = () => {
    return (
        <ContentStyles className='flex item-start'>
            <LeftContent/>
            <RightContent/>
        </ContentStyles>
    )
}

const ContentStyles = styled.div`
        flex:1;
        border-right : 1px solid rgba(0,0,0,.06);
        border-left : 1px solid rgba(0,0,0,.06);

        min-height: 100vh;
        /* background-color: red; */
        @media (max-width:980px) {
    border-right : 1px solid rgba(0,0,0,.06);
        }
    
  `

export default Content
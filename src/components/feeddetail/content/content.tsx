import React from 'react';
import styled from 'styled-components';
import Top from '../feedtop/top';
import PostDetailsComments from './comments';
import TweetFormSection from '@/components/common/tweetsection';
import PostFeedCard from '../card';



const PostDetailsContent: React.FC = () => {
    return (
        <PostDetailsContentStyles>
            <Top/>
            <PostFeedCard/>
            <TweetFormSection/>
            <PostDetailsComments/>
        </PostDetailsContentStyles>
    )
}

const PostDetailsContentStyles = styled.div`
        flex: 1;
        border-right : 1px solid rgba(0,0,0,.1);
        border-left : 1px solid rgba(0,0,0,.1);
        min-height: 100vh;

  `

export default PostDetailsContent
import React from 'react';
import styled from 'styled-components';
import Top from '../feedtop/top';
import PostDetailsComments from './comments';
import TweetFormSection from '@/components/common/tweetsection';
import PostFeedCard from '../card';



const PostDetailsContent: React.FC = () => {
    return (
        <PostDetailsContentStyles>
            <Top />
            {/* post feed card */}
            <PostFeedCard />
            {/* data likes reviews comments */}
            <div className="flex-100 column gap-1 fs-18 text-light text-grey text-light">
                <div className="flex bottom w-90 auto item-center gap-1">
                    <span>7:24 AM · Jul 21, 2023</span>
                    <span className="fs-16 text-grey text-light">·
                        <span className="fs-16 text-bold text-dark">5,133</span>
                        {" "}
                        Views
                    </span>
                </div>
                <div className="flex bottom w-90 auto item-center gap-2 flex-wrap">
                    <span className="fs-16 text-grey text-light">·
                        <span className="fs-16 text-bold text-dark">5</span>
                        {" "}
                        Retweets
                    </span> <span className="fs-16 text-grey text-light">·
                        <span className="fs-16 text-bold text-dark">5</span>
                        {" "}
                        Quotes
                    </span> <span className="fs-16 text-grey text-light">·
                        <span className="fs-16 text-bold text-dark">5</span>
                        {" "}
                        Likes
                    </span>
                    <span className="fs-16 text-grey text-light">·
                        <span className="fs-16 text-bold text-dark">5</span>
                        {" "}
                        Bookmarks
                    </span>
                </div>
            </div>
            <TweetFormSection />
            <PostDetailsComments />
        </PostDetailsContentStyles>
    )
}

const PostDetailsContentStyles = styled.div`
        flex: 1;
        border-right : 1px solid rgba(0,0,0,.1);
        border-left : 1px solid rgba(0,0,0,.1);
        min-height: 100vh;

        .bottom {
            padding:1.3rem 0;
            border-bottom : 1px solid rgba(0,0,0,.1);

        }

  `

export default PostDetailsContent
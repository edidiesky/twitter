import FeedCard from '@/components/common/FeedCard';
import { feedData } from '@/data';
import { feedcardtype } from '@/types/feedtype';
import React from 'react';
import styled from 'styled-components';

const Feed: React.FC = () => {
    return (
        <div className="w-100">
            <FeedStyles>
                <div className="flex w-100 column">
                    {
                        feedData.map((feed:feedcardtype) => {
                            return <FeedCard {...feed} key={feed.tweet_id} />
                        })
                    }
                </div>
            </FeedStyles>

        </div>
    )
}

const FeedStyles = styled.div`
    width: 100%;
  `

export default Feed
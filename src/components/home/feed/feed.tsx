import React from 'react';
import styled from 'styled-components';

interface FeedProps {
}
const Feed: React.FC<FeedProps> = () => {
    return (
        <div className="w-100">
            <FeedStyles>
                <h2 className="fs-30">Feed bar</h2>
            </FeedStyles>

        </div>
    )
}

const FeedStyles = styled.div`
    width: 100%;
  `

export default Feed
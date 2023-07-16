import React from 'react';
import styled from 'styled-components';

interface FeedCardProps {
}
const FeedCard: React.FC<FeedCardProps> = () => {
    return (
        <div className="w-100">
            <FeedCardStyles>
            </FeedCardStyles>

        </div>
    )
}

const FeedCardStyles = styled.div`
    width: 100%;
  `

export default FeedCard
import React from 'react';
import styled from 'styled-components';

interface TopProps {
}
const Top: React.FC<TopProps> = () => {
    return (
        <div className="w-100">
            <TopStyles>
                <h2 className="fs-30">Top bar</h2>
            </TopStyles>

        </div>
    )
}

const TopStyles = styled.div`
    width: 100%;
  `

export default Top
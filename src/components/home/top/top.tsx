import React from 'react';
import styled from 'styled-components';

interface TopProps {
}
const Top: React.FC<TopProps> = () => {
    return (
        <TopStyles className="w-100">
            <div>
                {/* <h2 className="fs-30">Top bar</h2> */}
            </div>

        </TopStyles>
    )
}

const TopStyles = styled.div`
    width: 100%;
    color: #fff;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.875);
  z-index: 30;
  /* padding: 1rem 0; */
  backdrop-filter: blur(54px);
  height: 10rem;
  border-bottom: 1px solid rgba(0,0,0,.1);
  /* backdrop-filter: c; */
  `

export default Top
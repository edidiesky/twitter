import React from 'react';
import styled from 'styled-components';

interface RightSidebarProps {
}
const RightSidebarIndex: React.FC<RightSidebarProps> = () => {
    return (
        <div className="w-100 h-100">
            <RightSidebarStyles>
                <h2>Right Sidebar</h2>
            </RightSidebarStyles>

        </div>
    )
}

const RightSidebarStyles = styled.div`
    width: 100%;
    background-color: red;
    height: 100vh;
    position: sticky;
    top: 10%;
  `

export default RightSidebarIndex
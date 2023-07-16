import React from 'react';
import styled from 'styled-components';

interface LeftSidebarProps {
}
const LeftSidebarIndex: React.FC<LeftSidebarProps> = () => {
    return (
        <div className="w-100 h-100">
            <LeftSidebarStyles>
                <h2>Left Sidebar</h2>
            </LeftSidebarStyles>

        </div>
    )
}

const LeftSidebarStyles = styled.div`
    width: 100%;
    background-color: red;
    height: 100vh;
    position: sticky;
    top: 10%;

  `

export default LeftSidebarIndex
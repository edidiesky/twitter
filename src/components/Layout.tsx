import React, { useState } from "react";
import { styled } from "styled-components";
interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-100">
      <LayoutStyles>
        {children}
      </LayoutStyles>

    </div>
  )
}

const LayoutStyles = styled.div`
  width: 100%;
`

export default Layout
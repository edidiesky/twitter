import React, { useState } from "react";
import { styled } from "styled-components";

const Logins: React.FC = () => {
    return (
        <LoginStyles style={{ overflow: "hidden" }}>
            <h2>Logins</h2>
        </LoginStyles>
    )
}

const LoginStyles = styled.div`
  width: 100%;
`

export default Logins
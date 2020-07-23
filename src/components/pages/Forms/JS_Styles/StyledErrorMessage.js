import styled from '@emotion/styled'

const StyledErrorMessage = styled.div`
    font-size: 12px;
    color: #f00;
    width: 400px;
    margin-top: 0.25rem;
    &:before {
        content: "❌    "; 
        font-size: 10px;
    }
`;

export default StyledErrorMessage;
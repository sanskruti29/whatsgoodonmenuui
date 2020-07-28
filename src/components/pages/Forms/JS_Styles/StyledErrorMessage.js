import styled from '@emotion/styled'

const StyledErrorMessage = styled.div`
    font-size: 12px;
    color: #d32323;
    font-weight: 500;
    margin-top: 0.25rem;
    &:before {
        content: "❗"; 
        font-size: 10px;
    }
`;

export default StyledErrorMessage;
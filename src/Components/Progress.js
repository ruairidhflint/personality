import styled from 'styled-components';

const Progress = ({ position = 0 }) => {
  return (
    <StyledProgress>
      <h4>{position}/70</h4>
    </StyledProgress>
  );
};

const StyledProgress = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h4 {
    color: ${(props) => props.theme.blue};
    font-size: 2rem;
  }
`;

export default Progress;

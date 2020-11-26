import styled from 'styled-components';

const Progress = ({ position = 1 }) => {
  return (
    <StyledProgress>
      <h4>{position}/70</h4>
      <ProgressBar>
        <PercentageComplete percentage={(position / 70) * 100} />
      </ProgressBar>
    </StyledProgress>
  );
};

const StyledProgress = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: ${(props) => props.theme.orange};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border: 1px solid ${(props) => props.theme.orange};
  border-radius: 10px;
  opacity: 0.6;
`;

const PercentageComplete = styled.div`
  width: ${(props) => `${props.percentage}%`};
  height: 100%;
  background-color: ${(props) => props.theme.orange};
`;
export default Progress;

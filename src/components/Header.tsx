import styled from 'styled-components';

const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <h1>TypeScript Type Generator</h1>
      <Line />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  min-height: 10vh;
  /* width: vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  height: 0.5rem;
  width: 35rem;
  background-color: #e06c2e;
`;

export default Header;

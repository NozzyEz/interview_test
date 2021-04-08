import styled from 'styled-components';

const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <h1>TypeScript Type Generator</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  min-height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;

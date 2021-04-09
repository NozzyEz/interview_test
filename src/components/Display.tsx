import styled from 'styled-components';

import CodeItem from './CodeItem';

interface Props {
  code: Array<codeElem>;
}

interface codeElem {
  name: string;
  type: string;
  key: string;
  props?: Array<codeElem> | undefined;
}

const Display: React.FC<Props> = ({code}) => {
  // console.log(code);
  return (
    <StyledDisplay>
      <h3>Code goes here</h3>
      <CodeBox>
        {code.map(line => (
          <CodeItem line={line} key={line.key} />
        ))}
      </CodeBox>
    </StyledDisplay>
  );
};

const StyledDisplay = styled.div`
  max-width: 70rem;
  flex-grow: 1;
  min-height: 80rem;
  border-radius: 2rem;
  border: 1px solid #eaeaea;
  h3 {
    padding: 2rem;
  }
`;
const CodeBox = styled.div`
  margin: 0rem 3.5rem;
  min-height: 50rem;
  padding: 3rem 5rem;
  background-color: #7f7f7f;
  border: 2px solid #e06c2e;
  border-radius: 1rem;
`;

export default Display;

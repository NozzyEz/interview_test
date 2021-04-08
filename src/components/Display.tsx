import styled from 'styled-components';

interface Props {
  code: Array<codeElem> | undefined;
}

interface codeElem {
  name: string;
  type: string;
  subtype?: string;
  key: string;
  props?: codeElem | undefined;
}

const Display: React.FC<Props> = ({code}) => {
  // console.log(code);
  return (
    <StyledDisplay>
      <CodeBox>
        <h3>Code goes here</h3>
        {!code && <p>But not before there is code to display</p>}
        {code !== undefined &&
          code.map(line => (
            <div className="line-container" key={line.key}>
              <code>
                {console.log(line)}
                {line.type !== 'Array' && line.type !== 'object' && `${line.name}: ${line.type}`}
                {line.type === 'Array' && `${line.name}: ${line.type}<${line.subtype}>`}
                {line.type === 'object' &&
                  `type ${line.name} = {
                  ${line.type}
                  ${line.type}
                }`}
              </code>
            </div>
          ))}
      </CodeBox>
    </StyledDisplay>
  );
};

const StyledDisplay = styled.div`
  max-width: 70rem;
  flex-grow: 1;
`;
const CodeBox = styled.div`
  /* width: 90%; */
  min-height: 80rem;
  border-radius: 2rem;
  border: 1px solid #eaeaea;
  padding: 5rem;
`;

export default Display;

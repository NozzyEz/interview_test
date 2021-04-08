import styled from 'styled-components';

interface Props {
  code: Array<codeElem> | undefined;
}

interface codeElem {
  name: string;
  type: string;
  subtype?: string;
  key: string;
  props?: Array<codeElem> | undefined;
}

const Display: React.FC<Props> = ({code}) => {
  // console.log(code);
  return (
    <StyledDisplay>
      <h3>Code goes here</h3>
      <CodeBox>
        {!code && <p>But not before there is code to display</p>}
        {code !== undefined &&
          code.map(line => (
            <div className="line-container" key={line.key}>
              <code>
                {line.type !== 'Array' && line.type !== 'object' && `${line.name}: ${line.type}`}
              </code>
              <code>{line.type === 'Array' && `${line.name}: ${line.type}<${line.subtype}>`}</code>
              <code>
                {line.type === 'object' &&
                  `type ${line.name} = {
                  ${line.props?.map(prop => {
                    if (prop.type === 'Array') {
                      return `${prop.name}: ${prop.type}<${prop.subtype}>`;
                    }
                    return `${prop.name}: ${prop.type}`;
                  })}
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
  padding: 5rem;
  background-color: #7f7f7f;
  border: 2px solid #e06c2e;
  border-radius: 1rem;
`;

export default Display;

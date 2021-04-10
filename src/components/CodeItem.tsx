import styled from 'styled-components';

interface Props {
  line: codeElem;
  props?: Array<codeElem> | undefined;
}

interface codeElem {
  name: string;
  type: string;
  key: string;
  props?: Array<codeElem> | undefined;
}

const CodeItem: React.FC<Props> = ({line}) => {
  const internalProps = (line.props || []).map(prop => (
    <ObjectCode key={prop.key}>{line.props && <CodeItem line={prop} />}</ObjectCode>
  ));

  return (
    <div className="line-container" key={line.key}>
      <code>{line.type !== 'Array' && line.type !== 'object' && `${line.name}: ${line.type}`}</code>

      {line.type === 'Array' && line.props && (
        <>
          <code>
            {`${line.name}: Array <`} <ArrayCodeItem line={line.props[0]} /> {`>`}
          </code>
        </>
      )}
      {line.type === 'object' && (
        <>
          <code>{`type ${line.name} = {`}</code>
          {line.props && internalProps}
          <code>{`}`}</code>
        </>
      )}
    </div>
  );
};

const ObjectCode = styled.div`
  margin-left: 2rem;
  font-size: 1.1rem;
`;

const ArrayCodeItem: React.FC<Props> = ({line}) => {
  return (
    <StyledArrayItem>
      {line.props && line.type === 'Array' && (
        <>
          {`Array <`} <ArrayCodeItem line={line.props[0]} /> {`>`}
        </>
      )}
      {line.type !== 'Array' && line.type}
    </StyledArrayItem>
  );
};

export default CodeItem;

const StyledArrayItem = styled.div`
  display: inline;
`;

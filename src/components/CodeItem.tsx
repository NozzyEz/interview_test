import styled from 'styled-components';

interface Props {
  line: codeElem;
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
  // if (internalProps.length > 0) console.log(internalProps[0].props.children.props.line.type);

  return (
    <div className="line-container" key={line.key}>
      <code>{line.type !== 'Array' && line.type !== 'object' && `${line.name}: ${line.type}`}</code>

      {/* {line.type === 'Array' && <code>{`${line.name}: Array<${arrProp}>`}</code>} */}

      {line.type === 'Array' && (
        <>
          <code>{`${line.name}: Array <*insert type of prop here*>`}</code>
          <div>
            <code>Arraytype:</code>
            {internalProps}
          </div>
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

export default CodeItem;

import {uuid} from 'uuidv4';
import styled from 'styled-components';
import Form from './Form';

interface Props {
  code: Array<codeElem>;
  line?: codeElem;

  setCode: Function;
}

interface codeElem {
  name: string;
  type: string | undefined;
  subtype?: string;
  key: string;
  props?: codeElem | undefined;
}

const InputSampler: React.FC<Props> = ({code, setCode}) => {
  //* adding a new code element to state
  function addCodeElemHandler() {
    console.log('addCodeHandler() initiated');
    let updatedCode = [];
    const newCode: codeElem = {
      name: '',
      type: 'number',
      subtype: undefined,
      //! code.length can make duplicate keys when elements are deleted
      key: uuid(),
    };

    if (newCode.name !== undefined && newCode.type !== undefined) {
      console.log('pair has both a name and a type, pushing to code array');
      updatedCode = code !== undefined ? [...code, newCode] : [newCode];
      setCode(updatedCode);
    }
    // console.log(code);
  }
  return (
    <Sampler>
      <h3>Select input type and name. Then you will see the magic happen</h3>
      {code !== undefined &&
        code.map(line => <Form code={code} setCode={setCode} line={line} key={line.key} />)}
      <button onClick={addCodeElemHandler}>Add new</button>
    </Sampler>
  );
};

const Sampler = styled.div`
  width: 80rem;
  min-height: 80rem;
  border-radius: 2rem;
  border: 1px solid #eaeaea;
  margin-right: 2rem;
  padding: 5rem;
  h3 {
    margin-bottom: 2rem;
  }
`;

export default InputSampler;

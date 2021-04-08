import {v4 as uuid} from 'uuid';
import styled from 'styled-components';
import FormItem from './FormItem';

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
  props?: Array<codeElem> | undefined;
}

const Form: React.FC<Props> = ({code, setCode}) => {
  //* adding a new code element to state
  function addFormItemHandler() {
    console.log('addCodeHandler() initiated');
    let updatedCode = [];
    const newCode: codeElem = {
      name: '',
      type: 'number',
      key: uuid(),
    };

    updatedCode = code !== undefined ? [...code, newCode] : [newCode];
    setCode(updatedCode);

    console.log(code);
  }
  return (
    <StyledForm>
      <h3>Select input type and name. Then you will see the magic happen</h3>
      {code !== undefined &&
        code.map(line => <FormItem code={code} setCode={setCode} line={line} key={line.key} />)}
      <button onClick={addFormItemHandler}>Add new</button>
    </StyledForm>
  );
};

const StyledForm = styled.div`
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

export default Form;

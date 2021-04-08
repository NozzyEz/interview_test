import {useState} from 'react';
import styled from 'styled-components';

interface Props {
  code: Array<codeElem>;
  line?: codeElem;

  setCode: Function;
}

interface codeElem {
  name: string;
  type: string | undefined;
  subtype?: string;
  key: number;
  parent?: number | undefined;
}

const InputSampler: React.FC<Props> = ({code, setCode}) => {
  //* pushing the chosen type and it's name to setCode state
  function addCodeElemHandler() {
    console.log('addCodeHandler() initiated');
    let updatedCode = [];
    const newCode: codeElem = {
      name: '',
      type: 'number',
      subtype: undefined,
      key: code !== undefined ? code.length : 0,
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
        code.map(line => <Input code={code} setCode={setCode} line={line} key={line.key} />)}
      <SamplerBtn onClick={addCodeElemHandler}>Add new</SamplerBtn>
    </Sampler>
  );
};

const Sampler = styled.div`
  width: 80rem;
  min-height: 80rem;
  border-radius: 2rem;
  border: 1px solid black;
  margin-right: 2rem;
  padding: 5rem;
  h3 {
    margin-bottom: 2rem;
  }
`;
const SamplerBtn = styled.button`
  /* margin: 0rem 2rem; */
  padding: 1.2rem 3rem;
  font-weight: bolder;
  border: none;
  background-color: #864521;
  color: #fff;
`;

const Input: React.FC<Props> = ({code, setCode, line}) => {
  const [type, setType] = useState<string>('number');
  const [subType, setSubType] = useState<string | undefined>('number');
  const [value, setValue] = useState<string>('');

  //* sets the type selected
  function typeChangeHandler(e: any) {
    setType(e.target.value);
    console.log(e.target.value);
    // Find index
    const i = code.findIndex(el => el.key === line?.key);
    console.log(i);
    // make a copy of code
    let newCode = [...code];
    // Create a new code 'line' from a copy based on the index
    const newCodeElement = newCode[i];
    // Change its value
    newCodeElement.type = e.target.value;
    if (e.target.value === 'Array') {
      setSubType('number');
      newCodeElement.subtype = 'number';
    } else {
      setSubType(undefined);
      newCodeElement.subtype = undefined;
    }
    // Add it back to the array
    newCode[i] = newCodeElement;
    // Update state with the new array
    setCode(newCode);
  }

  //* sets the subtype selected for Array type
  function subTypeChangeHandler(e: any) {
    setSubType(e.target.value);

    const i = code.findIndex(el => el.key === line?.key);
    console.log(i);

    let newCode = [...code];
    const newCodeElement = newCode[i];
    newCodeElement.subtype = e.target.value;
    newCode[i] = newCodeElement;
    setCode(newCode);
  }

  //* sets the name selected
  function valueChangeHandler(e: any) {
    setValue(e.target.value);
    // // console.log('setValue');
    const i = code.findIndex(el => el.key === line?.key);
    console.log(i);
    let newCode = [...code];
    const newCodeElement = newCode[i];
    newCodeElement.name = e.target.value;
    newCode[i] = newCodeElement;
    setCode(newCode);
  }

  return (
    <InputForm>
      <label htmlFor="">Name:</label>
      <SamplerInput placeholder="value" onChange={valueChangeHandler} value={value} />
      <label htmlFor="">Type:</label>
      <Selector defaultValue={type} onChange={typeChangeHandler}>
        <option value="number">Number</option>
        <option value="string">String</option>
        <option value="Array">Array</option>
        <option value="object">Object</option>
      </Selector>
      {type === 'Array' && (
        <>
          <label htmlFor="">Contains:</label>
          <Selector defaultValue={subType} onChange={subTypeChangeHandler}>
            <option value="number">Number</option>
            <option value="string">String</option>
            <option value="Array">Array</option>
            <option value="object">Object</option>
          </Selector>
        </>
      )}
      <SamplerBtn>Delete</SamplerBtn>
    </InputForm>
  );
};

const InputForm = styled.div`
  label {
    font-size: 1.4rem;
    margin: 0.5rem;
  }
`;

const SamplerInput = styled.input`
  width: 25rem;
  padding: 1rem 0rem;
  margin: 1rem 0rem;
`;
const Selector = styled.select`
  margin: 0rem 1rem;
  width: 10rem;
  padding: 1rem 0rem;
`;

export default InputSampler;

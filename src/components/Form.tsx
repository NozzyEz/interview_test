import {useState} from 'react';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid';

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

const Form: React.FC<Props> = ({code, setCode, line}) => {
  const [type, setType] = useState<string>('number');
  const [subType, setSubType] = useState<string | undefined>('number');
  const [value, setValue] = useState<string>('');
  const [props, setProps] = useState<Array<codeElem> | undefined>([]);

  //* sets the type of the code element or the prop selected
  function typeChangeHandler(e: any, prop?: codeElem) {
    // Find index of line
    const i = code.findIndex(el => el.key === line?.key);

    // make a copy of code
    let newCode = [...code];
    // Create a new code element from a copy based on the index
    const newCodeElement = newCode[i];

    let propIndex: number | undefined = undefined;
    if (prop) {
      // console.log(prop.key);
      // decontruct props
      let newProps = props ? [...props] : [];
      // find the prop with matching key
      propIndex = newProps.findIndex(el => el.key === prop.key);
      console.log(propIndex);

      // change it's type
      newProps[propIndex].type = e.target.value;
      // put the clone back in props
      setProps(newProps);
      newCodeElement.props = newProps;
      console.log('prop passed');
      console.log(newCodeElement);
      console.log(propIndex);
      newCodeElement.props[propIndex].type = e.target.value;
      // update code state
    } else {
      setType(e.target.value);
      newCodeElement.type = e.target.value;
      if (e.target.value === 'Array') {
        setSubType('number');
        newCodeElement.subtype = 'number';
        setProps(undefined);
        delete newCodeElement.props;
      } else if (e.target.value === 'object') {
        addPropsToObjHandler();
        setSubType(undefined);
        delete newCodeElement.subtype;
      } else {
        setSubType(undefined);
        setProps(undefined);
        // newCodeElement.subtype = undefined
        delete newCodeElement.subtype;
        delete newCodeElement.props;
      }
    }

    // Add it back to the array
    console.log('before saving state');
    console.log(newCodeElement);
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

  //* sets the name selected on the code element or prop
  function valueChangeHandler(e: any, prop?: codeElem) {
    let newCode = [...code];
    const i = code.findIndex(el => el.key === line?.key);
    const newCodeElement = newCode[i];
    let propIndex: number | undefined = undefined;
    if (prop) {
      let newProps = props ? [...props] : [];

      propIndex = newProps.findIndex(el => el.key === prop.key);
      console.log(propIndex);

      newProps[propIndex].name = e.target.value;
      // put the clone back in props
      setProps(newProps);
      newCodeElement.props = newProps;
      console.log('prop passed');
      console.log(newCodeElement);
      console.log(propIndex);
      newCodeElement.props[propIndex].name = e.target.value;
    } else {
      setValue(e.target.value);
      newCodeElement.name = e.target.value;
    }
    // // console.log('setValue');
    console.log(i);
    newCode[i] = newCodeElement;
    setCode(newCode);
  }

  // TODO create addPropsToObjHandler
  function addPropsToObjHandler() {
    console.log('addPropsToObjHandler() initiated');

    // initialize and clone props if they exist
    let tempProps: Array<codeElem> = [];
    if (line?.props) tempProps = line.props;

    const newProp: codeElem = {
      name: '',
      type: 'number',
      key: uuid(),
    };

    // clone code
    let newCode = [...code];
    // find index of object
    const objectIndex = newCode.findIndex(el => el.key === line?.key);
    // push newProp onto tempProps
    tempProps.push(newProp);
    setProps(tempProps);
    // overwrite object props with tempProps
    newCode[objectIndex].props = tempProps;

    // push clone to state
    setCode(newCode);
  }

  //* delete code element or prop
  function deleteElemHandler(e: any, prop?: codeElem) {
    let newCode = [...code];
    const i = code.findIndex(el => el.key === line?.key);
    let propIndex: number | undefined = undefined;

    if (prop) {
      let newProps = newCode[i].props;
      propIndex = newProps?.findIndex(el => el.key === prop.key);
      console.log('deleting prop');
      console.log(propIndex);
      if (propIndex) newProps?.splice(propIndex, 1);
      newCode[i].props = newProps;
    } else {
      console.log(i);
      newCode.splice(i, 1);
    }
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
      {code.findIndex(el => el.key === line?.key) !== 0 && (
        <button onClick={deleteElemHandler}>Delete</button>
      )}
      {type === 'object' &&
        props &&
        props.map(prop => (
          <ObjInputForm key={prop.key}>
            <label htmlFor="">Name:</label>
            <SamplerInput
              placeholder="value"
              onChange={e => valueChangeHandler(e, prop)}
              value={prop.name}
            />
            <label htmlFor="">Type:</label>
            <ObjSelector defaultValue={prop.type} onChange={e => typeChangeHandler(e, prop)}>
              <option value="number">Number</option>
              <option value="string">String</option>
              <option value="Array">Array</option>
              <option value="object">Object</option>
            </ObjSelector>
            <button onClick={e => deleteElemHandler(e, prop)}>Delete</button>
          </ObjInputForm>
        ))}
      {props && <ObjAddBtn onClick={addPropsToObjHandler}>Add new</ObjAddBtn>}
    </InputForm>
  );
};

const InputForm = styled.div`
  label {
    font-size: 1.4rem;
    margin: 0.5rem;
  }
`;
const ObjInputForm = styled.div`
  margin-left: 5rem;
  label {
    font-size: 1.4rem;
    margin: 0.5rem;
  }
`;

const ObjAddBtn = styled.button`
  margin-left: 5rem;
  margin-bottom: 1.5rem;
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
const ObjSelector = styled.select`
  margin: 0rem 1rem;
  width: 10rem;
  padding: 1rem 0rem;
`;

export default Form;
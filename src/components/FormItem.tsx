import {useState} from 'react';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid';

interface Props {
  code: Array<codeElem>;
  line: codeElem;
  parent?: codeElem;

  setCode: Function;
}

interface codeElem {
  name: string;
  type: string;
  key: string;
  props?: Array<codeElem> | undefined;
}

const FormItem: React.FC<Props> = ({code, setCode, line, parent}) => {
  const [type, setType] = useState<string>('number');
  const [value, setValue] = useState<string>('');

  const internalProps = (line?.props || []).map(prop => (
    <FormItem code={code} setCode={setCode} line={prop} parent={line} key={prop.key} />
  ));

  //* sets the type of the code element or the prop selected
  function typeChangeHandler(e: any) {
    setType(e.target.value);
    line.type = e.target.value;
    // console.log(newCodeElement);
    if (e.target.value === 'Array' || e.target.value === 'object') {
      line.props = [];
      addPropsHandler();
    } else {
      delete line.props;
    }
    setCode([...code]);
  }

  //* sets the name selected on the code element or prop
  function valueChangeHandler(e: any) {
    setValue(e.target.value);
    line.name = e.target.value;
    setCode([...code]);
  }

  //* When object is selected as type, create a prop
  function addPropsHandler() {
    console.log('addPropsToObjHandler() initiated');
    console.log(line.props);

    const newProp: codeElem = {
      name: '',
      type: 'number',
      key: uuid(),
    };

    if (line.props) {
      line.props.push(newProp);
    } else {
      line.props = [newProp];
    }
    console.log(line.props);
    setCode([...code]);
  }

  //* delete code element or prop
  function deleteElemHandler(e: any) {
    console.log(line);
    if (parent?.props) {
      // Delete item with splice on parent
      const i = parent.props.findIndex(el => el.key === line.key);
      console.log(i);
      console.log('Does have parent, deleting from it');
      parent.props.splice(i, 1);
    } else {
      // delete item with splice on code
      const i = code.findIndex(el => el.key === line.key);
      console.log(i);
      console.log("Doesn't have parent, deleting from code");
      code.splice(i, 1);
    }

    // update code state
    setCode([...code]);
  }

  return (
    <InputForm>
      {parent?.type !== 'Array' && (
        <>
          <label htmlFor="">Name:</label>
          <Input placeholder="value" onChange={valueChangeHandler} value={value} />
        </>
      )}
      <label htmlFor="">Type:</label>
      <Selector defaultValue={type} onChange={typeChangeHandler}>
        <option value="number">Number</option>
        <option value="string">String</option>
        <option value="Array">Array</option>
        <option value="object">Object</option>
      </Selector>

      {code.findIndex(el => el.key === line?.key) !== 0 && parent?.type !== 'Array' && (
        <button onClick={deleteElemHandler}>Delete</button>
      )}

      {(line.type === 'object' || line.type === 'Array') && (
        <ObjInputForm>
          {internalProps}
          {line.type === 'object' && <ObjAddBtn onClick={addPropsHandler}>Add new</ObjAddBtn>}
        </ObjInputForm>
      )}
    </InputForm>
  );
};

const InputForm = styled.div`
  label {
    font-size: 1.4rem;
    margin: 0.5rem;
  }
`;
const ObjInputForm = styled(InputForm)`
  margin-left: 5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border: 1px solid #e06c2e;
  border-radius: 1rem;
  padding: 1rem;
`;

const ObjAddBtn = styled.button`
  margin-left: 5rem;

  display: block;
`;

const Input = styled.input`
  width: 25rem;
  padding: 1rem 0rem;
  margin: 1rem 0rem;
`;
const Selector = styled.select`
  margin: 0rem 1rem;
  width: 10rem;
  padding: 1rem 0rem;
`;

export default FormItem;

import {useState} from 'react';
import {v4 as uuid} from 'uuid';

import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';

import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';

interface codeElem {
  name: string;
  type: string;
  subtype?: string;
  key: string;
  props?: Array<codeElem> | undefined;
}

let initialCodeElem = {
  name: '',
  type: 'number',
  key: uuid(),
};

function App() {
  const [code, setCode] = useState<Array<codeElem>>([initialCodeElem]);

  return (
    <div className="app">
      <GlobalStyles />
      <Header />
      <Container>
        <Form code={code} setCode={setCode} />
        <Display code={code} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  min-height: 50vh;
  margin: 2rem 5rem;
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

export default App;

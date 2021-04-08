import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';

import Header from './components/Header';
import InputSampler from './components/InputSampler';
import Display from './components/Display';
import {useState} from 'react';

interface codeElem {
  name: string;
  type: string;
  subtype?: string;
  key: number;
  parent?: number | undefined;
}

let initialCodeElem = {
  name: '',
  type: 'number',
  key: 0,
};

function App() {
  const [code, setCode] = useState<Array<codeElem>>([initialCodeElem]);

  return (
    <div className="app">
      <GlobalStyles />
      <Header />
      <Container>
        <InputSampler code={code} setCode={setCode} />
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
  align-items: center;
`;

export default App;

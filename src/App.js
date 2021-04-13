import React from 'react'

import { Container } from "semantic-ui-react";

/* コンポーネント */
import ContactView from './components/contact-view'

function App() {
  return (
    <Container>
      <h1><center>連絡先管理</center></h1>
      <ContactView/>
    </Container>
  );
}

export default App;

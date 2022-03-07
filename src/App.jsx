import './App.css';
import useInstance, { DocumentViewerSimpleDisplay } from '@pdftron/webviewer-react';
import React, { useEffect } from 'react'

function App() {

  const { instance } = useInstance()

  useEffect(()=>{
    if (instance) console.log('WV instance ', instance)
  },[instance])

  return (
    <div className="App">
      <DocumentViewerSimpleDisplay path='lib' initialDoc='1.pdf' />
    </div>
  );
}

export default App;

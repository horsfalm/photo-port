import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <section className="my-5">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </section>
  );
}

export default App;

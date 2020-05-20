import React from 'react';
import './App.css';
import TvshowsTable from './components/TvshowsTable';
import TvshowsForm from './components/TvshowsForm';
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Rollingflix ADMIN </p>
      </header>
      <Row>
        <Col span={12}>
          <TvshowsTable />
        </Col>
        <Col span={12}>
          <TvshowsForm />
        </Col>
      </Row>
    </div>
  );
}

export default App;

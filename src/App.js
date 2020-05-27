import React, { useState } from 'react';
import './App.css';
import TvshowsTable from './components/TvshowsTable';
import TvshowsForm from './components/TvshowsForm';
import TvshowsEdit from './components/TvshowsEdit';
import { Row, Col } from 'antd';

function App() {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ editingTVshow, setEditingTVshow ] = useState({})
  console.log("tvshow a edittttar:", editingTVshow)

  return (
    <div className="App">
      <header className="App-header">
        <p> Rollingflix ADMIN </p>
      </header>
      <Row>
        <Col span={12}>
          <TvshowsTable
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            setEditingTVshow={setEditingTVshow}
            editingTVshow={editingTVshow}
          />
        </Col>
        {
          isEditing ?
            <Col span={12}>
              <TvshowsEdit
                setIsEditing={setIsEditing}
                isEditing={isEditing}
                tvshow={editingTVshow}
              />
            </Col>
            :
            <Col span={12}>
              <TvshowsForm
                setIsEditing={setIsEditing}
                isEditing={isEditing}
              />
            </Col>
        }
      </Row>
    </div>
  );
}

export default App;

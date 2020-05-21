import React, { Component } from 'react';
import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
  { title: 'Nombre', dataIndex: 'title', key: 'title' },
  { title: 'Año', dataIndex: 'year', key: 'year' },
  { title: 'Pais', dataIndex: 'country', key: 'country' },
  { title: 'Poster', dataIndex: 'poster', key: 'poster' },
  { title: 'Temporadas', dataIndex: 'seasons', key: 'seasons' },
  { title: 'Categoria', dataIndex: 'genre', key: 'genre' },
  { title: 'Resumen', dataIndex: 'summary', key: 'summary' },
  {
    dataIndex: '',
    fixed: 'right',
    key: 'x',
    width: 40,
    render: () => <EditOutlined twoToneColor="#52c41a" />,
  },
  {
    dataIndex: '',
    fixed: 'right',
    key: 'x',
    width: 40,
    render: () => <DeleteOutlined twoToneColor="#eb2f96" />,
  }
];

export default class TvshowsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch('http://localhost:3001/tvshows')
      .then(res => res.json())
      .then(data => this.setState({ data }))
  
  }

  render() {
    return(
      <div className="component-container">
        <h3>TvshowsTable</h3>
        <Table
          columns={columns}
          dataSource={this.state.data}
          scroll={{ x: 1500, y: 300 }}
        />
      </div>
    )
  }
}
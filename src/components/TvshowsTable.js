import React, { Component } from 'react';
import { Table, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default class TvshowsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: []
    }
  }

  componentDidMount() {
    this.fetchData();
    this.setColumns()
  }

  fetchData() {
    console.log("por fetchear")
    fetch('http://localhost:3001/tvshows')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  setColumns() {
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
        render: (tvshow) =>
          this.state.data.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(tvshow._id)}>
              <DeleteOutlined twoToneColor="#eb2f96" />
            </Popconfirm>
          ) : null,
      }
    ];

    this.setState({ columns })
  }
  
  handleDelete(tvshowId) {
    const data = [...this.state.data];
    this.setState({
      data: data.filter(tvshow => tvshow._id !== tvshowId),
    });
  
    const requestOptions = {
      method: 'DELETE'
    }
  
    console.log("por borrar")
    fetch("http://localhost:3001/tvshows/" + tvshowId, requestOptions)
      .then(response => response.json())
      .then(() => { console.log("tvshow deleted") })
  }

  render() {
    return(
      <div className="component-container">
        <h3>TvshowsTable</h3>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          scroll={{ x: 1500, y: 300 }}
        />
      </div>
    )
  }
}
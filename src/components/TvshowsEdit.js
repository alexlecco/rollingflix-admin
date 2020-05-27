import React, { Component } from 'react';

export default class TvshowsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      year: '',
      country: '',
      poster: '',
      seasons: '',
      genre: '',
      summary: ''
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangePoster = this.handleChangePoster.bind(this);
    this.handleChangeSeasons = this.handleChangeSeasons.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeSummary = this.handleChangeSummary.bind(this);
  }

  componentDidMount() {
    this.fillFields()
  }

  fillFields() {
    console.log("tvshow a editar::::::::", this.props.tvshow)
    this.setState({
      id: this.props.tvshow._id,
      title: this.props.tvshow.title,
      year: this.props.tvshow.year,
      country: this.props.tvshow.country,
      poster: this.props.tvshow.poster,
      seasons: this.props.tvshow.seasons,
      genre: this.props.tvshow.genre,
      summary: this.props.tvshow.summary
    })
  }

  handleChangeTitle(e) {
    let title = e.target.value;
    this.setState({title})
  }

  handleChangeYear(e) {
    let year = e.target.value;
    this.setState({year})
  }

  handleChangeCountry(e) {
    let country = e.target.value;
    this.setState({country})
  }

  handleChangePoster(e) {
    let poster = e.target.value;
    this.setState({poster})
  }

  handleChangeSeasons(e) {
    let seasons = e.target.value;
    this.setState({seasons})
  }

  handleChangeGenre(e) {
    let genre = e.target.value;
    this.setState({genre})
  }

  handleChangeSummary(e) {
    let summary = e.target.value;
    this.setState({summary})
  }

  handlePutReq() {
    console.log("por actualizar")
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    fetch("http://localhost:3001/tvshows/" + this.state.id, requestOptions)
      .then(response => response.json())
      .then(() => { console.log("tvshow updated") })

    this.props.setIsEditing(!this.props.isEditing)
  }

  handlePostReq() {
    console.log("por enviar")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch('http://localhost:3001/tvshows', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
  }

  render() {
    return (
      <div className="component-container">
        <h3>TvshowsForm</h3>

        <form onSubmit={() => this.handlePutReq()}>
          <div>
            <label> Nombre: </label>
            <input type="text" onChange={this.handleChangeTitle} value={this.state.title} />
          </div>
          <div>
            <label> Año de estreno: </label>
            <input type="text" onChange={this.handleChangeYear} value={this.state.year} />
          </div>
          <div>
            <label> Pais: </label>
            <input type="text" onChange={this.handleChangeCountry} value={this.state.country} />
          </div>
          <div>
            <label> Poster: </label>
            <input type="text" onChange={this.handleChangePoster} value={this.state.poster} />
          </div>
          <div>
            <label> Temporadas: </label>
            <input type="text" onChange={this.handleChangeSeasons} value={this.state.seasons} />
          </div>
          <div>
            <label> Categoria: </label>
            <input type="text" onChange={this.handleChangeGenre} value={this.state.genre} />
          </div>
          <div>
            <label> Resumen: </label>
            <input type="text" onChange={this.handleChangeSummary} value={this.state.summary} />
          </div>

          <div>
            <input type="submit" value="Actualizar" />
          </div>
        </form>
      </div>
    )
  }
}
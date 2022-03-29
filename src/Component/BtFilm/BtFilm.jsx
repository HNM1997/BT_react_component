import React, { Component } from 'react'
import DanhSachFilm from './DanhSachFilm'
import DataFilm from '../../data/DataFilms.json'
export default class BtFilm extends Component {
  render() {
    return (
      <div>
          <DanhSachFilm arrFilm={DataFilm}/>
      </div>
    )
  }
}

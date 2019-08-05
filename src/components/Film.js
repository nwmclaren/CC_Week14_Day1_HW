import React, {Component} from 'react';

class Film extends Component {

  render(){

    return(
      <li className="film">
      <a href={this.props.film.url}>{this.props.film.name}</a>
      </li>
    );
  }

}

export default Film;

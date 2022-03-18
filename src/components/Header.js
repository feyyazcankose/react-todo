import React from 'react';
class Header extends React.Component {
    render() {
      return (
        <div className="row">
          <h1> {this.props.title} </h1> <p> {this.props.description} </p>{" "}
        </div>
      );
    }
  }

export default Header;
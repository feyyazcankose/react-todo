import React from 'react';

class Action extends React.Component {
    constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.state = {
        error: "",
      };
    }
  
    onFormSubmit(e) {
      e.preventDefault();
      let item = e.target.name.value;
      e.target.name.value = "";
      let error = this.props.addItem(item);
  
      this.setState({ error: error });
    }
  
    render() {
      return (
        <div className="row mt-3">
          {this.state.error && <div className="alert alert-danger">{this.state.error}</div> }
          <form className="p-0" onSubmit={this.onFormSubmit}>
            <div className="input-group">
            <input type="text" className="form-control" name="name" />
            <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      );
    }
  }

  export default Action;

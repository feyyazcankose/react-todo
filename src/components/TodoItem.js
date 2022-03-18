import React from "react";
class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem() {
      this.props.deleteItem(this.props.item);
    }
  
    render() {
      return (
        <li className="mt-3 d-flex justify-content-between">
          {this.props.item} <button className="btn btn-danger"onClick={this.deleteItem}> X </button>
        </li>
      );
    }
  }


  export default TodoItem;
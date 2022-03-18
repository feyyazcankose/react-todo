import React from 'react';
import TodoItem from './TodoItem';
class Todo extends React.Component {
    render() {
      return (
        <div className="row">
         
          {
            this.props.items.length != 0 ?
            <div>
              <ul>
                {this.props.items.map((item, index) => (
                  <TodoItem
                    key={index}
                    id={index}
                    item={item}
                    deleteItem={this.props.deleteItem}
                  />
                ))}
              </ul>
              <div className="d-flex justify-content-end p-0">
                  <button onClick={this.props.clearItems} className="btn btn-danger "> Temizle </button>
              </div>
            </div>
            :
            <div className="alet alert-warning"  role="alert">
              Başlamak için eleman girin.
            </div>
            
          }
          
        </div>
      );
    }
  }


export default Todo;
